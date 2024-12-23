import styles from './styles.module.css'
import Box from "@mui/material/Box"
import ShiptmentsPersonalData from '@/components/shiptments-personal-data'
import ShiptmentsAddressData from '@/components/shiptments-address-data'
import ShiptmentsItemsData from '@/components/shipments-items-data'
import ExtraQuestions from '@/components/extra-questions'
import Button from '@mui/material/Button'
import { useContext, useEffect, useState } from 'react'
import { RedeemPageContext } from '@/contexts/redeem-page-context'
import useRedeemPageDispatch from '@/hooks/useRedeemPageDispatch'
import { useRouter } from 'next/router'
import { RedeemsContext } from '@/contexts/redeems-context'

export default function RedeemStep() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>()
  const redeem = useContext(RedeemsContext)
  const redeemPage = useContext(RedeemPageContext)
  const redeemPageDispatch = useRedeemPageDispatch()

  useEffect(() => {
    if (!router.query.id) return

    (async function fetchRedeemPage() {
      setIsLoading(true)

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_LOBBY_API_HOST}/api/v1/redeem_pages/${router.query.id}`, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${process.env.NEXT_PUBLIC_LOBBY_API_KEY}`
        }
      })

      const data = await response.json()
      
      redeemPageDispatch({
        type: 'charged',
        data: {
          redeemPage: data,
        }
      })

      setIsLoading(false)
    })()
  }, [router.query.id])
  
  async function submit() {
    const payload = {
      redeemer_name: redeem?.name,
      redeemer_email: redeem?.email,
      redeemer_document_number: redeem?.cpf,
      redeemer_zipcode: redeem?.cep,
      redeemer_street: redeem?.street,
      redeemer_number: redeem?.adressNumber,
      redeemer_complement: redeem?.complement,
      redeemer_neighborhood: redeem?.neighborhood,
      redeemer_city: redeem?.city,
      redeemer_state: redeem?.state,
      redeemer_country: redeem?.country,
      redeemer_phone: redeem?.size,
      extra_question_responses: Object.keys(redeem?.extraQuestions ?? {}).map((key: any) => ({
        extra_question_id: key,
        answer: redeem?.extraQuestions?.[key]?.answer,
      })),
      items: Object.keys(redeem?.items ?? {}).map((key) => ({
        customer_product_id: key,
        size_name: redeem?.items?.[key].size_name,
      })),
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOBBY_API_HOST}/api/v1/redeem_pages/${router.query.id}/redeem`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${process.env.NEXT_PUBLIC_LOBBY_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (response.status === 201) router.push('/redeemed-gift')    
  }

  return (
    <Box component="section" className={styles.welcomeStepContainer}>
      <Box className={styles.welcomeStepMain}>
        <h1 className={styles.welcomeStepTitle}>Finalize seu resgate! 🚚</h1>

        <ShiptmentsPersonalData />

        <ShiptmentsAddressData />

        {(redeemPage?.items && redeemPage?.items.length > 0) && <ShiptmentsItemsData />}

        {(redeemPage?.extra_questions && redeemPage?.extra_questions.length > 0) && <ExtraQuestions />}

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
            disabled={isLoading}
            onClick={() => router.push('/welcome-step')}
          >
            Voltar
          </Button>
          <Button
            sx={{
              backgroundColor: '#22007F'
            }}
            variant="contained"
            disabled={isLoading}
            onClick={submit}
          >
            Concluir
          </Button>
        </Box>
      </Box>
    </Box>
  )
}