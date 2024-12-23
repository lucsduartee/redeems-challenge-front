import { RedeemPageContext } from "@/contexts/redeem-page-context";
import useRedeemsDispatch from "@/hooks/useRedeemsDispatch";
import { Box, FormControl, FormGroup, FormLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useContext, useState } from "react";

export default function ExtraQuestions() {
  const [questions, setQuestions] = useState<{ [key: string]: string }>({})
  const redeemPage = useContext(RedeemPageContext)

  const redeemsDispatch = useRedeemsDispatch()

  const handleRedeemChange = (event: SelectChangeEvent | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, id: number) => {
    setQuestions((prevState) => ({ ...prevState, [id]: event.target.value }))

    redeemsDispatch({
      type: 'updated',
      data: {
        answer: event.target.value,
        extra_question_id: id,
      },
      field: event.target.name,
    });
  };

  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '16px',
      marginBottom: '12px'
    }}>
      <FormLabel sx={{ fontWeight: 600 }}>Perguntas Extras</FormLabel>

      <FormGroup
        sx={{
          display: 'grid',
          width: '100%',
          gap: '20px',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto',
        }}
      >
        {
          redeemPage?.extra_questions.map((extraQuestion) => {
            if (!(extraQuestion.answer_type === 'select_one')) {
              return (<TextField
                id="size"
                label={extraQuestion.question}
                value={questions[extraQuestion.id] || ''}
                variant="standard"
                name="extraQuestions"
                sx={{
                  width: '100%'
                }}
                key={extraQuestion.id}
                onChange={(e) => handleRedeemChange(e, extraQuestion.id)}
                required
              />)
            }

            return (
              <FormControl
                variant="standard"
                sx={{
                  width: '100%'
                }}
              >
                <InputLabel required id="country-label">{extraQuestion.question}</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  value={questions[extraQuestion.id] || ''}
                  name="extraQuestions"
                  onChange={(e) => handleRedeemChange(e, extraQuestion.id)}
                  label={extraQuestion.question}
                  required
                  key={extraQuestion.id}
                >
                  {
                    extraQuestion.options.map((option, index) => (
                      <MenuItem key={index} value={option}>{option}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            )
          })
        }

      </FormGroup>
    </Box>
  )
}