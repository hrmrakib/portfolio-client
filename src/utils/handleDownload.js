const handleDownload = () => {
  const pdfUrl = "frontend-developer-rakibul.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "frontend-developer-rakibul.pdf"); // Set the file name

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};

export default handleDownload;
