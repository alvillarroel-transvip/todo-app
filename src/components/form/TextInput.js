import { useField } from "formik"
import TextField from '@mui/material/TextField';


export const TextInput = ({label, ...props}) => {

    
    const [field, meta ] = useField(props);

    return (
        <>
         <TextField
         label={label}
          margin="normal"
          fullWidth
          multiline
          {...field}
          {...props}
          error={meta.touched && meta.error ? true : false}
          helperText={meta.touched && meta.error && meta.error}
          rows={field.name === 'name' ? null : 4}
          autoComplete="none"
        />  
        </>
    )
}
