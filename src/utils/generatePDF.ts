import jsPDF from 'jspdf';
import { cvData } from '../data/cvData';
import perfilImg from '../assets/perfil.jpeg';

export const generatePDF = async () => {
  // Criar novo documento PDF (A4)
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  let currentY = margin;

  // Cores
  const primaryColor = '#4f46e5'; // Brand color
  const textColor = '#333333';
  const lightText = '#666666';

  // Helper para adicionar texto com quebra de linha
  const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number, color: string = textColor, isBold: boolean = false) => {
    doc.setFontSize(fontSize);
    doc.setTextColor(color);
    doc.setFont("helvetica", isBold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.4); // Retorna a altura aproximada usada
  };

  // Helper para verificar quebra de página
  const checkPageBreak = (neededHeight: number) => {
    if (currentY + neededHeight > 280) {
      doc.addPage();
      currentY = margin;
    }
  };

  // 1. Cabeçalho (Foto + Informações Pessoais)
  try {
    // Para carregar a imagem no jsPDF, precisamos convertê-la para base64. 
    // Como a imagem é estática nos assets, usamos ela diretamente ou criamos um elemento Image temporário
    const img = new Image();
    img.src = perfilImg;
    await new Promise((resolve) => {
      img.onload = resolve;
      img.onerror = resolve; // Continua mesmo se falhar
    });
    
    // Desenha a foto circular (simulada cortando como quadrado arredondado)
    doc.addImage(img, 'JPEG', margin, currentY, 35, 35);
  } catch (e) {
    console.error("Erro ao carregar imagem no PDF", e);
  }

  // Informações Pessoais (ao lado da foto)
  const textStartX = margin + 45;
  doc.setFontSize(24);
  doc.setTextColor(primaryColor);
  doc.setFont("helvetica", "bold");
  doc.text(cvData.personalInfo.name, textStartX, currentY + 10);
  
  doc.setFontSize(14);
  doc.setTextColor(textColor);
  doc.setFont("helvetica", "normal");
  doc.text(cvData.personalInfo.title, textStartX, currentY + 18);

  doc.setFontSize(10);
  doc.setTextColor(lightText);
  doc.text(`${cvData.personalInfo.location} | ${cvData.personalInfo.email} | +${cvData.personalInfo.whatsapp}`, textStartX, currentY + 26);
  doc.text(`LinkedIn: ${cvData.personalInfo.linkedin}`, textStartX, currentY + 32);

  currentY += 45;

  // Linha divisória
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, currentY, pageWidth - margin, currentY);
  currentY += 10;

  // 2. Resumo Profissional
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.setFont("helvetica", "bold");
  doc.text("Resumo Profissional", margin, currentY);
  currentY += 8;

  const summaryHeight = addWrappedText(cvData.personalInfo.summary, margin, currentY, pageWidth - (margin * 2), 10, textColor);
  currentY += summaryHeight + 10;

  // 3. Habilidades Técnicas (Agrupadas)
  checkPageBreak(40);
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.setFont("helvetica", "bold");
  doc.text("Principais Habilidades", margin, currentY);
  currentY += 8;

  const formatSkills = (skills: any[]) => skills.map(s => s.name).join(', ');

  const skillGroups = [
    { title: "Frontend:", text: formatSkills(cvData.skills.frontend) },
    { title: "Backend:", text: formatSkills(cvData.skills.backend) },
    { title: "Arquitetura & DevOps:", text: `${formatSkills(cvData.skills.architecture)}, ${formatSkills(cvData.skills.devops)}` },
    { title: "Dados & RPA:", text: `${formatSkills(cvData.skills.dataAnalytics)}, ${formatSkills(cvData.skills.rpaAutomation)}` }
  ];

  skillGroups.forEach(group => {
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(textColor);
    doc.text(group.title, margin, currentY);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(lightText);
    const textHeight = addWrappedText(group.text, margin + 40, currentY, pageWidth - margin - 60, 10, lightText);
    currentY += Math.max(textHeight, 6);
  });
  
  currentY += 10;

  // 4. Experiência Profissional
  doc.setFontSize(14);
  doc.setTextColor(primaryColor);
  doc.setFont("helvetica", "bold");
  doc.text("Experiência Profissional", margin, currentY);
  currentY += 10;

  cvData.experience.forEach(exp => {
    checkPageBreak(30);
    
    // Nome da Empresa e Período
    doc.setFontSize(12);
    doc.setTextColor(textColor);
    doc.setFont("helvetica", "bold");
    doc.text(exp.company, margin, currentY);
    
    doc.setFontSize(10);
    doc.setTextColor(lightText);
    doc.setFont("helvetica", "normal");
    doc.text(exp.period, pageWidth - margin - doc.getTextWidth(exp.period), currentY);
    
    currentY += 8;

    // Roles (Cargos)
    exp.roles.forEach(role => {
      checkPageBreak(40);
      
      doc.setFontSize(11);
      doc.setTextColor(primaryColor);
      doc.setFont("helvetica", "bold");
      doc.text(role.title, margin + 5, currentY);
      
      doc.setFontSize(9);
      doc.setTextColor(lightText);
      doc.setFont("helvetica", "italic");
      doc.text(role.period, pageWidth - margin - doc.getTextWidth(role.period), currentY);
      
      currentY += 6;

      // Descrição
      const descHeight = addWrappedText(role.description, margin + 5, currentY, pageWidth - margin - 25, 9, textColor);
      currentY += descHeight + 4;

      // Achievements (Conquistas/Atividades)
      if (role.achievements && role.achievements.length > 0) {
        role.achievements.forEach(ach => {
          checkPageBreak(10);
          doc.setFontSize(9);
          doc.setTextColor(lightText);
          doc.setFont("helvetica", "normal");
          doc.text("•", margin + 10, currentY);
          const achHeight = addWrappedText(ach, margin + 15, currentY, pageWidth - margin - 35, 9, lightText);
          currentY += achHeight + 2;
        });
      }
      
      // Techs do cargo
      if (role.techs && role.techs.length > 0) {
        checkPageBreak(10);
        doc.setFontSize(8);
        doc.setTextColor(primaryColor);
        doc.setFont("helvetica", "bold");
        const techsText = `Techs: ${role.techs.join(', ')}`;
        const techHeight = addWrappedText(techsText, margin + 5, currentY, pageWidth - margin - 25, 8, primaryColor);
        currentY += techHeight + 4;
      }
      
      currentY += 4;
    });
    
    currentY += 4;
  });

  // Salvar o PDF
  doc.save('Lucas_Capelotto_CV.pdf');
};