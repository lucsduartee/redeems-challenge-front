import Image from "next/image"
import styles from './styles.module.css'
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useContext, useEffect, useState } from "react"
import useRedeemPageDispatch from "@/hooks/useRedeemPageDispatch"
import { RedeemPageContext } from "@/contexts/redeem-page-context"
import { useRouter } from "next/router"

export default function WelcomeStep() {
  const [isLoading, setIsLoading] = useState<boolean>()
  const router = useRouter()
  const redeemPage = useContext(RedeemPageContext)
  const dispatch = useRedeemPageDispatch()

  const redeemPageIsActive = redeemPage?.status

  useEffect(() => {
    (async function fetchRedeemPage() {
      setIsLoading(true)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOBBY_API_HOST}/api/v1/redeem_pages`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${process.env.NEXT_PUBLIC_LOBBY_API_KEY}`
        }
      })

      const data = await response.json()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const redeemPage = data.find((redeemPage: any) => redeemPage.status === 'ACTIVE')

      dispatch({
        type: 'saved',
        data: {
          redeemPage,
        }
      })

      setIsLoading(false)
    })()
  }, [])

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
          disabled={isLoading || !redeemPageIsActive}
          onClick={() => router.push(`/redeem-step/${redeemPage?.id}`)}
        >
          {redeemPageIsActive ? 'Começar' : 'Resgate indisponível' }
        </Button>

        <div className={styles.welcomeStepFooter}>
          © 2024 - <b>Lobby.tech</b> em parceria com a <b>Lobby</b>
        </div>
      </Box>
    </Box>
  )
}