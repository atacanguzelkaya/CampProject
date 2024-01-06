import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

export default function ProductAdd() {
    const initialValues = { title: "", price: "" };
    const schema = Yup.object({
        title: Yup.string().required("Ürün adı zorunlu"),
        price: Yup.number().required("Ürün fiyatı zorunlu")
    });
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => console.log(values)}>

                <Form className='ui form'>
                    <KodlamaIoTextInput name="title" placeholder="Ürün Adı" />
                    <KodlamaIoTextInput name="price" placeholder="Ürün Fiyatı" />

                    {/* <FormField>
                        <Field name='price' placeholder='Ürün Fiyatı' ></Field>
                        <ErrorMessage name='price' render={error=>
                            <Label pointing basic color='red' content={error}></Label>
                        }></ErrorMessage>
                    </FormField> */}
                    <Button color="green" type="submit"> Ekle </Button>
                </Form>
            </Formik>
        </>
    );
}