import styles from './styles.module.css'
import Box from "@mui/material/Box"
import ShiptmentsPersonalData from '@/components/shiptments-personal-data'
import ShiptmentsAddressData from '@/components/shiptments-address-data'
import ShiptmentsItemsData from '@/components/shipments-items-data'
import ExtraQuestions from '@/components/extra-questions/indext'
import Button from '@mui/material/Button'

export default function WelcomeStep() {
  return (
    <Box component="section" className={styles.welcomeStepContainer}>
      <Box className={styles.welcomeStepMain}>
        <h1 className={styles.welcomeStepTitle}>Finalize seu resgate! 🚚</h1>

        <ShiptmentsPersonalData />

        <ShiptmentsAddressData />

        <ShiptmentsItemsData />

        <ExtraQuestions />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Button
            sx={{
              color: '#22007F',
              border: '#22007F 1px solid'
            }}
            variant="outlined"
          >
            Voltar
          </Button>
          <Button
            sx={{
              backgroundColor: '#22007F'
            }}
            variant="contained"
          >
            Concluir
          </Button>
        </Box>
      </Box>
    </Box>
  )
}