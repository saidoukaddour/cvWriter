import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Roboto',
    backgroundColor: '#ffffff'
  },
  header: {
    marginBottom: 20,
    textAlign: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  title: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 10,
    textTransform: 'uppercase'
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    fontSize: 10,
    color: '#64748b'
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottom: 1,
    borderBottomColor: '#e2e8f0'
  },
  experienceItem: {
    marginBottom: 10,
    paddingLeft: 15
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#64748b',
    marginBottom: 5
  },
  itemDescription: {
    fontSize: 10,
    color: '#475569',
    lineHeight: 1.4
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  skillCategory: {
    width: '45%',
    marginBottom: 10
  },
  skillTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5
  },
  skillItem: {
    fontSize: 10,
    color: '#475569',
    marginBottom: 2
  }
}); 