import * as React from 'react';
import FieldSelector from '../FieldSelector/FieldSelector'
import FieldConstructor from '../FieldConstructor/FieldConstructor'
import { StylesProvider } from '@material-ui/styles';
import Axios, { AxiosInstance } from 'axios';
import { genNameField } from '../Helper/Generator';
import { DragDropContext } from 'react-beautiful-dnd';
import FieldSelectorAcumulation from '../FieldsSelectorAcumulation/FieldSelectorAcumulation';

interface FormBuilderProps {
    fields: Array<any>,
    isSoftExpertForm: boolean,
    sendForm(fields: any, service: string, institution: string, name: string, description: string, comparations: Array<any>): void,
    apiURL: string,
    headers: any,
    institutionApi: string,
    serviceApi: string,
    formUrl?: string
}

export default class FormBuilder extends React.Component<FormBuilderProps, {}> {

    axiosInstance: AxiosInstance

    constructor(props: any) {
        super(props)

        this.handleAddField = this.handleAddField.bind(this)
        this.handleDeleteField = this.handleDeleteField.bind(this)
        this.handleSaveField = this.handleSaveField.bind(this)
        this.addFieldGrid = this.addFieldGrid.bind(this)
        this.handleInstitutionChange = this.handleInstitutionChange.bind(this)
        this.handleInput = this.handleInput.bind(this)
        this.handleAddPageField = this.handleAddPageField.bind(this)
        this.handleDeletePageField = this.handleDeletePageField.bind(this)
        this.handleMusBeDifferent = this.handleMusBeDifferent.bind(this)

        this.axiosInstance = Axios.create({
            baseURL: this.props.apiURL,
            headers: this.props.headers
        });
    }

    public static defaultProps = {
        fields: [],
        isSoftExpertForm: false,
        sendForm: Function
    };

    state = {
        fields: this.props.fields,
        oldFields: [],
        positionOnEdit: 0,
        isSoftExpertForm: this.props.isSoftExpertForm,
        institutions: [],
        services: [],
        serviceSelected: "",
        institutionSelected: "",
        name: "",
        differentsFields: [],
        version: 1,
        description: "",
        onPage: 0,
        isLoadingFields: true
    }

    handleSaveSuccess = () => {
        this.setState({
            ...this.state,
            fields: [[]],
            oldFields: [],
            positionOnEdit: 0,
            serviceSelected: "",
            institutionSelected: "",
            name: "",
            description: "",
            onPage: 0,
            isLoadingFields: true
        })
    }

    handleSaveField = (newField: any, positionField: number, isGrid: boolean = false, positionOnGrid: number = 0) => {
        let { fields, onPage } = this.state

        if (!isGrid) {
            const newFields = Array.from(fields)
            newFields[onPage].splice(positionField, 1)
            newFields[onPage].splice(positionField, 0, newField)

            this.setState({
                ...this.state,
                fields: newFields,
                oldFields: fields,
            })
        }
        else {
            const newFields = Array.from(fields)

            newFields[onPage][positionField].fields!.splice(positionOnGrid, 1)
            newFields[onPage][positionField].fields!.splice(positionOnGrid, 0, newField)

            this.setState({
                ...this.state,
                fields: newFields,
                oldFields: fields
            })
        }
    }

    handleDeleteField = (positionField: number, isGrid: boolean = false, fieldPositionOnGrid: number) => {
        const { fields, onPage } = this.state

        if (!isGrid) {
            const newFields = Array.from(fields)
            newFields[onPage].splice(positionField, 1)

            this.setState({
                ...this.state,
                fields: newFields
            })
        }
        else {
            const newFields = Array.from(fields)
            newFields[onPage][positionField].fields!.splice(fieldPositionOnGrid, 1)

            this.setState({
                ...this.state,
                fields: newFields
            })
        }
    }

    onDragEnd = (result: any, _provided: any) => {

        const { source, destination } = result
        const { fields, onPage } = this.state

        if (!destination) {
            return
        }

        if ((destination.draggableId === source.draggableId) && (destination.index === source.index)) {
            return
        }

        const originPos = source.index
        const fieldSelected = fields[onPage][originPos]
        const destinationPos = destination.index
        const newOrderFields = Array.from(fields)

        if (destination.droppableId !== 'droppable-2' && (destination.droppableId === source.droppableId)) {

            newOrderFields[onPage].splice(originPos, 1)
            newOrderFields[onPage].splice(destinationPos, 0, fieldSelected)

            this.setState({
                ...this.state,
                fields: newOrderFields
            })

        }

        if (destination.droppableId !== 'droppable-2' && destination.droppableId !== source.droppableId) {
            const type = result.draggableId
            const field = this.handleDragFieldType(type)
            this.handleAddField(field, destinationPos)
        }

    }

    handleDragFieldType = (type: string): Object => {

        let structure = {}

        switch (type) {
            case 'select':
                structure = {
                    id: genNameField('select') + '-id',
                    type: 'select',
                    father_id: null,
                    entity: '',
                    group: "grp01",
                    label_persist: '',
                    hidden: false,
                    required: true,
                    enabled: true,
                    label: 'Select',
                    orden: '01',
                    name: genNameField('select'),
                    values: []
                }
                break;
            case 'checkbox-group':
                structure = {
                    id: genNameField('checkbox') + '-id',
                    type: "checkbox-group",
                    group: "grp01",
                    label: 'Checkbox',
                    name: genNameField('checkbox'),
                    hidden: false,
                    enabled: true,
                    required: true,
                    orden: "100303100029",
                    values: []
                }
                break;
            case 'text':
                structure = {
                    id: genNameField('texto') + '-id',
                    type: "text",
                    label: 'Text',
                    Mask: '',
                    MaskParam: false,
                    group: "grp01",
                    orden: "100303100192",
                    hidden: false,
                    required: false,
                    enabled: true,
                    name: genNameField('texto'),
                    subtype: "text"
                }
                break;
            case 'radio-group':
                structure = {
                    id: genNameField('radio') + '-id',
                    type: "radio-group",
                    group: "grp01",
                    label: 'Radio',
                    name: genNameField('radio'),
                    hidden: false,
                    enabled: true,
                    required: true,
                    orden: "100303100029",
                    values: []
                }
                break;
            case 'header':
                structure = {
                    id: genNameField('header') + '-id',
                    type: "header",
                    subtype: "h1",
                    name: genNameField('header'),
                    label: 'Header',
                    enabled: true,
                    hidden: false,
                    orden: "100134100022"
                }
                break;
            case 'time':
                structure = {
                    id: genNameField('time') + '-id',
                    type: "time",
                    label: 'Time',
                    Mask: "30",
                    MaskParam: '',
                    group: "grp01",
                    orden: "100750100048",
                    hidden: false,
                    required: false,
                    enabled: true,
                    name: genNameField('time'),
                    subtype: "text"
                }
                break;
            case 'grid':
                structure = {
                    type: "grid",
                    enabled: true,
                    label: 'Grid',
                    group: "grp01",
                    orden: "100842100042",
                    name: genNameField('grid'),
                    relationship: '',
                    acumulatedFields: [],
                    fields: []
                }
                break;
            case 'date':
                structure = {
                    id: genNameField('date') + '-id',
                    type: "date",
                    label: "Fecha ",
                    Mask: '',
                    MaskParam: '',
                    group: "grp01",
                    orden: "100713100048",
                    hidden: false,
                    required: false,
                    enabled: true,
                    name: genNameField('date'),
                    subtype: "text"
                }
                break;
            case 'textarea':
                structure = {
                    id: genNameField('textarea') + '-id',
                    type: "textarea",
                    name: genNameField('textarea'),
                    label: 'Textarea',
                    rows: 10,
                    cols: 50,
                    Mask: '',
                    MaskParam: '',
                    group: 'grp01',
                    orden: "100750100048",
                    hidden: false,
                    required: false,
                    enabled: true,
                }
                break;
            default:
                structure = {}
                break;
        }

        return structure
    }

    handleAddPageField = () => {

        const { fields } = this.state
        const newPageField: Array<any> = []

        fields.push(newPageField)

        this.setState({
            ...this.state,
            fields: fields
        })
    }

    handleMusBeDifferent = (fieldsGroups: Array<any>) => {

        this.setState({
            ...this.state,
            differentsFields: [
                ...fieldsGroups
            ]
        })

    }

    handleDeletePageField = (e: React.ChangeEvent<unknown>, index: number) => {
        const { fields } = this.state

        fields.splice(index, 1)

        this.setState({
            ...this.state,
            fields: fields
        })
    }

    handleAddField = (field: any, pos: number = 0) => {

        const { fields, onPage } = this.state

        fields[onPage].splice(pos, 0, field)

        this.setState({
            ...this.state,
            fields: fields
        })
    }

    addFieldGrid = (_e: React.ChangeEvent<any>, positionField: number) => {

        const { fields, onPage } = this.state
        const nameGen = genNameField('grid-field')

        fields[onPage][positionField].fields!.push({
            "type": "text",
            "label": nameGen,
            "Mask": null,
            "group": "grp01",
            "orden": "100266100184",
            "hidden": false,
            "required": false,
            "enabled": true,
            "name": nameGen,
            "subtype": "text"
        })

        this.setState({
            ...this.state,
            fields: [
                ...fields
            ]
        })
    }

    handleInstitutionSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const target = e.target
        const value = target.value

        this.setState({
            ...this.state,
            institutionSelected: value
        })

        this.handleInstitutionChange(value)
    }

    handleServiceSelect = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const target = e.target
        const value = target.value

        this.setState({
            ...this.state,
            serviceSelected: value
        })
    }

    handleInstitutionChange = async (value: string) => {

        const serviceResponse = await this.axiosInstance.get(`allservices/institution/${value}`)

        this.setState({
            ...this.state,
            services: serviceResponse.data
        })
    }

    handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handlePageSelected = (_e: React.ChangeEvent<unknown>, index: number) => {
        this.setState({
            ...this.state,
            onPage: index
        })
    }

    componentDidMount = async () => {

        const { institutionApi, serviceApi, formUrl } = this.props
        const institutionsResponse = await this.axiosInstance.get(institutionApi)

        this.setState({
            ...this.state,
            institutions: institutionsResponse.data,
        })

        if (formUrl) {

            const fomularyResponse = await this.axiosInstance.get(formUrl)
            const fields = fomularyResponse.data.fields.map((jsonString: string) => JSON.parse(jsonString))
            const extra = JSON.parse(fomularyResponse.data.extra)
            const differents = extra ? extra.differents : new Array()
            const institution_id = fomularyResponse.data.institution_id
            const service_id = fomularyResponse.data.service_id
            const version = parseInt(fomularyResponse.data.version) + 1

            this.handleInstitutionChange(institution_id)

            this.setState({
                ...this.state,
                fields: fields,
                institutionSelected: institution_id,
                serviceSelected: service_id,
                isLoadingFields: false,
                differentsFields: differents,
                version: version,
                name: fomularyResponse.data.name,
                description: fomularyResponse.data.description
            })
        }
        else {
            const defaultFields = [
                []
            ]

            this.setState({
                ...this.state,
                fields: defaultFields,
                isLoadingFields: false
            })
        }
    }

    render() {

        const { fields, isSoftExpertForm,
            services, institutions,
            serviceSelected, institutionSelected,
            onPage, name, description, isLoadingFields, version, differentsFields } = this.state

        const { sendForm } = this.props

        return (
            <StylesProvider injectFirst>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'center', alignItems: 'flex-start', width: '100%', height: '100%' }}>
                        <FieldConstructor
                            pagesFields={fields}
                            fields={fields[onPage] ? fields[onPage] : []}
                            onDragEnd={this.onDragEnd}
                            handleDeleteField={this.handleDeleteField}
                            handleSaveField={this.handleSaveField}
                            addFieldGrid={this.addFieldGrid}
                            isSoftExpertForm={isSoftExpertForm}
                            services={services}
                            institutions={institutions}
                            handleInstitution={this.handleInstitutionSelect}
                            handleService={this.handleServiceSelect}
                            serviceSelected={serviceSelected}
                            institutionSelected={institutionSelected}
                            handleInput={this.handleInput}
                            differentsFields={differentsFields}
                            name={name}
                            description={description}
                            isLoadingFields={isLoadingFields}
                            handleAddPageField={this.handleAddPageField}
                            handleDeletePageField={this.handleDeletePageField}
                            handlePageSelected={this.handlePageSelected}
                            onPage={onPage}
                            version={version}
                            handleMusBeDifferent={this.handleMusBeDifferent}
                        />
                        <FieldSelector handleAddField={this.handleAddField}
                            sendForm={sendForm}
                            fields={fields}
                            institution={institutionSelected}
                            service={serviceSelected}
                            name={name}
                            version={version}
                            description={description}
                            handleSaveSuccess={this.handleSaveSuccess}
                            differentsFields={differentsFields}
                        />
                    </div>
                </DragDropContext>
            </StylesProvider>
        )
    }
}
