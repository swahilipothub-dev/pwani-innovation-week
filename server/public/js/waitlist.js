document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const waitlistTableBody = document.getElementById('waitlistTableBody');
    const paginationContainer = document.getElementById('paginationContainer');
    const viewEntryModal = document.getElementById('viewEntryModal');
    const entryDetails = document.getElementById('entryDetails');

    // State
    let currentPage = 1;
    const limit = 10;
    let searchQuery = '';

    // Initialize
    loadWaitlist();

    // Event Listeners
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }

    // View Entry Modal
    if (viewEntryModal) {
        viewEntryModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const entryId = button.getAttribute('data-entry-id');
            loadEntryDetails(entryId);
        });
    }

    // Functions
    async function handleSearch() {
        searchQuery = searchInput.value.trim();
        currentPage = 1;
        await loadWaitlist();
    }

    async function loadWaitlist() {
        try {
            showLoading(true);
            const response = await fetch(`/api/waitlist?page=${currentPage}&limit=${limit}&search=${encodeURIComponent(searchQuery)}`);
            const { data, pagination } = await response.json();
            
            renderWaitlist(data);
            renderPagination(pagination);
        } catch (error) {
            console.error('Error loading waitlist:', error);
            showError('Failed to load waitlist data');
        } finally {
            showLoading(false);
        }
    }

    function renderWaitlist(entries) {
        if (!entries || entries.length === 0) {
            waitlistTableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center py-4 text-muted">
                        No waitlist entries found
                    </td>
                </tr>`;
            return;
        }

        waitlistTableBody.innerHTML = entries.map(entry => `
            <tr>
                <td>${entry.first_name} ${entry.last_name}</td>
                <td>${entry.email}</td>
                <td>${entry.phone_number || 'N/A'}</td>
                <td>${new Date(entry.createdAt).toLocaleDateString()}</td>
                <td class="text-end">
                    <button class="btn btn-sm btn-primary me-1" 
                            data-bs-toggle="modal" 
                            data-bs-target="#viewEntryModal"
                            data-entry-id="${entry._id}">
                        <i class="fas fa-eye"></i> View
                    </button>
                    <form class="d-inline" 
                          onsubmit="return confirm('Are you sure you want to delete this entry?')" 
                          action="/admin/waitlist/${entry._id}?_method=DELETE" 
                          method="POST">
                        <button type="submit" class="btn btn-sm btn-danger">
                            <i class="fas fa-trash"></i>
                        </button>
                    </form>
                </td>
            </tr>
        `).join('');
    }

    async function loadEntryDetails(id) {
        try {
            entryDetails.innerHTML = `
                <div class="text-center">
                    <div class="spinner-border text-primary my-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>`;

            const response = await fetch(`/api/waitlist/${id}`);
            const entry = await response.json();
            
            entryDetails.innerHTML = `
                <div class="row mb-3">
                    <div class="col-md-6">
                        <h6>Name</h6>
                        <p>${entry.first_name} ${entry.last_name}</p>
                    </div>
                    <div class="col-md-6">
                        <h6>Email</h6>
                        <p>${entry.email}</p>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-md-6">
                        <h6>Phone</h6>
                        <p>${entry.phone_number || 'N/A'}</p>
                    </div>
                    <div class="col-md-6">
                        <h6>Date Added</h6>
                        <p>${new Date(entry.createdAt).toLocaleString()}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h6>Agreements</h6>
                        <p>
                            <i class="fas ${entry.agree_terms ? 'fa-check text-success' : 'fa-times text-danger'}"></i> 
                            Agreed to Terms<br>
                            <i class="fas ${entry.agree_communications ? 'fa-check text-success' : 'fa-times text-danger'}"></i> 
                            Agreed to Communications
                        </p>
                    </div>
                </div>`;
        } catch (error) {
            console.error('Error loading entry details:', error);
            entryDetails.innerHTML = `
                <div class="alert alert-danger">
                    Failed to load entry details. Please try again.
                </div>`;
        }
    }

    function renderPagination(pagination) {
        if (!pagination || pagination.totalPages <= 1) {
            paginationContainer.innerHTML = '';
            return;
        }

        const { total, page, totalPages } = pagination;
        const pages = [];
        const maxPages = 5;
        let startPage = Math.max(1, page - Math.floor(maxPages / 2));
        let endPage = Math.min(totalPages, startPage + maxPages - 1);

        if (endPage - startPage + 1 < maxPages) {
            startPage = Math.max(1, endPage - maxPages + 1);
        }

        // Previous button
        pages.push(`
            <li class="page-item ${page === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${page - 1}" ${page === 1 ? 'tabindex="-1"' : ''}>
                    &laquo;
                </a>
            </li>`
        );

        // Page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(`
                <li class="page-item ${i === page ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>`
            );
        }

        // Next button
        pages.push(`
            <li class="page-item ${page === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" data-page="${page + 1}" ${page === totalPages ? 'tabindex="-1"' : ''}>
                    &raquo;
                </a>
            </li>`
        );

        paginationContainer.innerHTML = `
            <ul class="pagination mb-0">
                ${pages.join('')}
            </ul>
            <div class="text-muted ms-3">
                Showing ${(page - 1) * limit + 1}-${Math.min(page * limit, total)} of ${total} entries
            </div>`;

        // Add event listeners to pagination links
        paginationContainer.querySelectorAll('.page-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const newPage = parseInt(link.dataset.page);
                if (newPage !== currentPage) {
                    currentPage = newPage;
                    loadWaitlist();
                }
            });
        });
    }

    function showLoading(show) {
        const loadingElement = document.getElementById('loadingIndicator');
        if (loadingElement) {
            loadingElement.style.display = show ? 'block' : 'none';
        }
    }

    function showError(message) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger alert-dismissible fade show';
        alert.role = 'alert';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;
        document.querySelector('.container-fluid').prepend(alert);
        
        // Auto-remove alert after 5 seconds
        setTimeout(() => {
            alert.remove();
        }, 5000);
    }
});
