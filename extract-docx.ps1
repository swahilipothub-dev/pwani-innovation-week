$src = 'c:\Users\vinla\OneDrive\Desktop\SPHF\WebSites\pwani-innovation-week\public\files\PIW Program 2026 V4 (2).docx'
$tempRoot = [System.IO.Path]::GetTempPath()
$stamp = [System.Guid]::NewGuid().ToString('N')
$zipPath = Join-Path $tempRoot "docx_$stamp.zip"
$outDir = Join-Path $tempRoot "docx_${stamp}_extract"
Copy-Item -LiteralPath $src -Destination $zipPath -Force
Expand-Archive -LiteralPath $zipPath -DestinationPath $outDir -Force
$xmlFile = Join-Path $outDir 'word\document.xml'
$xml = [System.IO.File]::ReadAllText($xmlFile, [System.Text.Encoding]::UTF8)
$text = [regex]::Replace($xml, '</w:p>', "`n")
$text = [regex]::Replace($text, '<[^>]+>', '')
$text = [regex]::Replace($text, '[ \t]+', ' ')
$lines = $text -split "`n" | ForEach-Object { $_.Trim() } | Where-Object { $_ -ne '' }
$outFile = "c:\Users\vinla\OneDrive\Desktop\SPHF\WebSites\pwani-innovation-week\docx-extracted.txt"
$lines | Out-File -FilePath $outFile -Encoding utf8
Write-Output "DONE: $($lines.Count) lines written to $outFile"
