import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaDownload, FaEdit } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Success.css';

const Success = () => {
  const navigate = useNavigate();

  const handleDownloadPDF = async () => {
    const cvData = JSON.parse(localStorage.getItem('cv-data'));
    if (!cvData) return;

    // Create a temporary div to render the CV
    const tempDiv = document.createElement('div');
    tempDiv.className = 'cv-preview-for-pdf';
    document.body.appendChild(tempDiv);

    // Create a more professional CV template
    tempDiv.innerHTML = `
      <div class="cv-pdf">
        <header class="cv-header">
          <h1>${cvData.personalInfo.fullName}</h1>
          <p class="job-title">${cvData.personalInfo.jobTitle}</p>
          <div class="contact-info">
            <span>📧 ${cvData.personalInfo.email}</span>
            <span>📱 ${cvData.personalInfo.phone}</span>
          </div>
          <div class="personal-details">
            <span>🎂 Date of Birth: ${new Date(cvData.personalInfo.dateOfBirth).toLocaleDateString()}</span>
            <span>👤 Gender: ${cvData.personalInfo.gender}</span>
            ${cvData.personalInfo.nationality ? `<span>🌍 Nationality: ${cvData.personalInfo.nationality}</span>` : ''}
            ${cvData.personalInfo.address || cvData.personalInfo.city || cvData.personalInfo.country ? 
              `<span>📍 Address: ${[cvData.personalInfo.address, cvData.personalInfo.city, cvData.personalInfo.country]
                .filter(Boolean).join(', ')}</span>` : ''}
          </div>
        </header>

        ${cvData.personalInfo.summary ? `
          <div class="cv-section">
            <h2>Professional Summary</h2>
            <p class="summary">${cvData.personalInfo.summary}</p>
          </div>
        ` : ''}

        ${cvData.experiences.length > 0 ? `
          <div class="cv-section">
            <h2>Professional Experience</h2>
            ${cvData.experiences.map(exp => `
              <div class="experience-item">
                <div class="item-header">
                  <div class="title-company">
                    <h3>${exp.title}</h3>
                    <span class="company">${exp.company}${exp.location ? ` - ${exp.location}` : ''}</span>
                  </div>
                  <span class="date">${exp.startDate} - ${exp.endDate || 'Present'}</span>
                </div>
                ${exp.description ? `<p class="description">${exp.description}</p>` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}

        ${cvData.education.length > 0 ? `
          <div class="cv-section">
            <h2>Education</h2>
            ${cvData.education.map(edu => `
              <div class="education-item">
                <div class="item-header">
                  <div class="title-company">
                    <h3>${edu.degree}</h3>
                    <span class="company">${edu.school}${edu.location ? ` - ${edu.location}` : ''}</span>
                  </div>
                  <span class="date">${edu.startDate} - ${edu.endDate || 'Present'}</span>
                </div>
                ${edu.description ? `<p class="description">${edu.description}</p>` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="cv-section">
          <h2>Skills</h2>
          <div class="skills-container">
            ${cvData.skills.technical.length > 0 ? `
              <div class="skill-column">
                <h3>Technical Skills</h3>
                <ul>
                  ${cvData.skills.technical.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            
            ${cvData.skills.soft.length > 0 ? `
              <div class="skill-column">
                <h3>Soft Skills</h3>
                <ul>
                  ${cvData.skills.soft.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
            
            ${cvData.skills.languages.length > 0 ? `
              <div class="skill-column">
                <h3>Languages</h3>
                <ul>
                  ${cvData.skills.languages.map(skill => `<li>${skill}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    // Add the styles...
    const style = document.createElement('style');
    style.textContent = `
      .cv-pdf {
        font-family: 'Arial', sans-serif;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px;
        color: #333;
        line-height: 1.6;
      }

      .cv-header {
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid #1a4b8c;
      }

      .cv-header h1 {
        font-size: 28px;
        margin: 0 0 5px 0;
        color: #1a4b8c;
      }

      .cv-header .job-title {
        font-size: 18px;
        color: #666;
        margin: 0 0 15px 0;
      }

      .contact-info {
        display: flex;
        gap: 20px;
        font-size: 14px;
        color: #666;
        margin-bottom: 15px;
      }

      .personal-details {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        font-size: 14px;
        color: #666;
      }

      .cv-section {
        margin-bottom: 25px;
      }

      .cv-section h2 {
        font-size: 20px;
        color: #1a4b8c;
        margin: 0 0 15px 0;
        padding-bottom: 5px;
        border-bottom: 1px solid #ddd;
      }

      .summary {
        font-size: 14px;
        color: #444;
        line-height: 1.6;
        margin-bottom: 20px;
      }

      .experience-item, .education-item {
        margin-bottom: 20px;
      }

      .item-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;
      }

      .title-company {
        flex: 1;
      }

      .title-company h3 {
        font-size: 16px;
        color: #333;
        margin: 0 0 5px 0;
      }

      .company {
        font-size: 14px;
        color: #666;
        display: block;
      }

      .date {
        font-size: 14px;
        color: #666;
        font-style: italic;
        min-width: 150px;
        text-align: right;
      }

      .description {
        font-size: 14px;
        color: #444;
        margin: 8px 0;
        line-height: 1.6;
        padding-right: 150px;
      }

      .skills-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
      }

      .skill-column h3 {
        font-size: 16px;
        color: #1a4b8c;
        margin: 0 0 10px 0;
      }

      .skill-column ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      .skill-column li {
        font-size: 14px;
        color: #444;
        margin-bottom: 5px;
        padding-left: 15px;
        position: relative;
      }

      .skill-column li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #1a4b8c;
      }
    `;
    tempDiv.appendChild(style);

    try {
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        onclone: (clonedDoc) => {
          clonedDoc.querySelector('.cv-pdf').style.backgroundColor = '#ffffff';
        }
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling'],
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      
      pdf.addImage(
        imgData, 
        'JPEG', 
        margin, 
        margin, 
        pageWidth - (margin * 2), 
        pageHeight - (margin * 2),
        '', 
        'FAST'
      );
      
      pdf.save(`${cvData.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      document.body.removeChild(tempDiv);
    }
  };

  const handleEditCV = () => {
    navigate('/create-cv');
  };

  return (
    <div className="success-page">
      <div className="success-content">
        <div className="success-header">
          <FaCheckCircle className="success-icon pulse" />
          <h1>CV Created Successfully!</h1>
          <p>Your CV has been created and is ready for download</p>
        </div>

        <div className="success-actions">
          <button className="action-button download" onClick={handleDownloadPDF}>
            <FaDownload />
            <span>Download PDF</span>
          </button>
          
          <button className="action-button edit" onClick={handleEditCV}>
            <FaEdit />
            <span>Edit CV</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success; 