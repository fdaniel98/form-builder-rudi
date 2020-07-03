import * as React from 'react'

export interface FormBuilderProps extends React.Props<FormBuilder> {
    fields: Array<any>,
    isSoftExpertForm: boolean,
    sendForm(fields: any, service: string, institution: string, name: string, description: string, version: string, differentsFields: Array<any>): void,
    apiURL?: string,
    headers?: any,
    institutionApi: string,
    serviceApi: string,
    formUrl: string
}

declare class FormBuilder extends React.Component<FormBuilderProps, any>{

}

declare module 'formBuilder' {

}

export default FormBuilder