const handleDownload = () => {
  const pdfUrl = "Rakibul_Alam_Frontend_Engineer_Resume_2024.pdf";

  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "Rakibul_Alam_Frontend_Engineer_Resume_2024"); // Set the file name

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};

export default handleDownload;
