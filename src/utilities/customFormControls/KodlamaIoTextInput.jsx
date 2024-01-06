import React from "react";
import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

export default function KodlamaIoTextInput({ ...props }) {
  //gelecek değerler spread ile açıldı
  //console.log(props);
  const [field, meta] = useField(props);
  //console.log(field);
  //console.log(meta);
  return (
    <div>
        {/* stringi boola çevirmek için !! kullanıldı */}
      <FormField error={meta.touched && !!meta.error}> 
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}