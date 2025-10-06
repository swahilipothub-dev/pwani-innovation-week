import {Toaster} from "@/components/ui/toaster";
import {Toaster as Sonner} from "@/components/ui/sonner";
import {TooltipProvider} from "@/components/ui/tooltip";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "@/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Engage from "./pages/Engage";
import NotFound from "./pages/NotFound";
import Hackathon from "./pages/Hackathon";
import PlenarySessions from "./pages/PlenarySessions";
import Workshops from "./pages/Workshops";
import PanelDiscussions from "./pages/PanelDiscussions";
import NetworkingEvents from "./pages/NetworkingEvents";
import Exhibitions from "./pages/Exhibitions";
import PIW2023 from "./pages/PIW2023";
import PIW2024 from "./pages/PIW2024";
import SpeakerApplicationForm from "@/pages/SpeakerApplicationForm.tsx";
import Tickets from "@/pages/Tickets.tsx";
import Vendors from "@/pages/Vendors.tsx";
import Inquiries from "@/pages/Inquiries.tsx";
import Schedule from "./pages/Schedule.tsx";
import Exhibitors from "./pages/Exhibitors.tsx";
import Volunteer from "./pages/Volunteer.tsx";
import ManagementTeam from "./pages/ManagementTeam.tsx";
import Mentee from "./pages/Mentee.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster/>
      <Sonner/>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/speakers" element={<Speakers/>}/>
            <Route path="/tickets" element={<Tickets/>}/>
            <Route path="/speaking/apply" element={<SpeakerApplicationForm/>}/>
            <Route path="/engage" element={<Engage/>}/>
            <Route path="/vendors" element={<Vendors/>}/>
            <Route path="/contact" element={<Inquiries/>}/>
            <Route path="/hackathon" element={<Hackathon/>}/>
            <Route path="/plenary-sessions" element={<PlenarySessions/>}/>
            <Route path="/workshops" element={<Workshops/>}/>
            <Route path="/panel-discussions" element={<PanelDiscussions/>}/>
            <Route path="/networking-events" element={<NetworkingEvents/>}/>
            <Route path="/exhibitions" element={<Exhibitions/>}/>
            <Route path="/exhibitors" element={<Exhibitors/>}/>
            <Route path="registration/internal/volunteer" element={<Volunteer/>}/>
            <Route path="registration/internal/management-team" element={<ManagementTeam/>}/>
            <Route path="registration/internal/mentee" element={<Mentee/>}/>
            <Route path="/piw-2023" element={<PIW2023/>}/>
            <Route path="/piw-2024" element={<PIW2024/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
