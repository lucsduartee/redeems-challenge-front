import Image from "next/image"
import styles from './styles.module.css'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export default function WelcomeStep() {
  return (
    <Box component="section" className={styles.welcomeStepContainer}>
      <Box className={styles.welcomeStepMain}>
        <Image
          src="/LOGO.svg"
          alt="Lobby Logo"
          width={180}
          height={38}
          priority
          className={styles.welcomeStepImage}
        />

        <h1 className={styles.welcomeStepTitle}>Bem Vindo!</h1>

        <p className={styles.welcomeStepContent}>
          Estamos muito felizes em ter você em nossa equipe!
          Preencha as perguntinhas a seguir para escolher o seu presente! 🎁
        </p>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#22007F'
          }}
        >
          Começar!
        </Button>

        <div className={styles.welcomeStepFooter}>
          © 2024 - <b>Lobby.tech</b> em parceria com a <b>Lobby</b>
        </div>
      </Box>
    </Box>
  )
}