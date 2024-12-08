import React from 'react';
import { Page, Text, View, Document, Font } from '@react-pdf/renderer';
import { styles } from './PDFStyles';

// Register a web-safe font
Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
  fontWeight: 'normal'
});

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf',
  fontWeight: 'bold'
});

const PDFDocument = ({ personalInfo, experiences, education, skills }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo?.fullName || 'Your Name'}</Text>
          <Text style={styles.title}>{personalInfo?.jobTitle || 'Professional Title'}</Text>
          <View style={styles.contactInfo}>
            {personalInfo?.email && <Text>{personalInfo.email}</Text>}
            {personalInfo?.phone && <Text>{personalInfo.phone}</Text>}
          </View>
        </View>

        {/* Summary */}
        {personalInfo?.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Summary</Text>
            <Text style={styles.itemDescription}>{personalInfo.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {experiences?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Professional Experience</Text>
            {experiences.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.itemTitle}>{exp.title}</Text>
                <Text style={styles.itemSubtitle}>
                  {exp.company} • {exp.location} • {exp.startDate} - {exp.endDate || 'Present'}
                </Text>
                {exp.description && (
                  <Text style={styles.itemDescription}>{exp.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {education.map((edu, index) => (
              <View key={index} style={styles.experienceItem}>
                <Text style={styles.itemTitle}>{edu.degree}</Text>
                <Text style={styles.itemSubtitle}>
                  {edu.school} • {edu.location} • {edu.startDate} - {edu.endDate || 'Present'}
                </Text>
                {edu.description && (
                  <Text style={styles.itemDescription}>{edu.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {(skills?.technical?.length > 0 || skills?.soft?.length > 0 || skills?.languages?.length > 0) && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills & Expertise</Text>
            <View style={styles.skillsGrid}>
              {skills.technical?.length > 0 && (
                <View style={styles.skillCategory}>
                  <Text style={styles.skillTitle}>Technical Skills</Text>
                  {skills.technical.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>• {skill}</Text>
                  ))}
                </View>
              )}
              {skills.soft?.length > 0 && (
                <View style={styles.skillCategory}>
                  <Text style={styles.skillTitle}>Soft Skills</Text>
                  {skills.soft.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>• {skill}</Text>
                  ))}
                </View>
              )}
              {skills.languages?.length > 0 && (
                <View style={styles.skillCategory}>
                  <Text style={styles.skillTitle}>Languages</Text>
                  {skills.languages.map((skill, index) => (
                    <Text key={index} style={styles.skillItem}>• {skill}</Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

export default PDFDocument; 