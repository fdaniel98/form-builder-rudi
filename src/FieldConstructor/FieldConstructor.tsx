import * as React from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Select,
  OutlinedInput,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  TextField,
  CircularProgress,
  Zoom,
} from "@material-ui/core";
import Fields from "../Fields/FIelds";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import FieldEditForm from "../FieldModal/FieldEditForm";
import FieldModal from "../FieldModal/FieldModal";
import { Add, Delete } from "@material-ui/icons";
import FieldSelectorAcumulation from "../FieldsSelectorAcumulation/FieldSelectorAcumulation";

interface FieldConstructorProps {
  onDragEnd: any;
  fields: any;
  handleDeleteField: any;
  handleSaveField: any;
  addFieldGrid: any;
  isSoftExpertForm: boolean;
  services: Array<any>;
  institutions: Array<any>;
  handleInstitution: any;
  handleService: any;
  institutionSelected: any;
  serviceSelected: any;
  pagesFields: Array<any>;
  differentsFields: Array<any>;
  handleInput: any;
  name: string;
  description: string;
  isLoadingFields: boolean;
  onPage: number;
  version: number;
  handleAddPageField(): void;
  handleDeletePageField(e: React.ChangeEvent<unknown>, index: number): void;
  handlePageSelected(e: React.ChangeEvent<unknown>, index: number): void;
  handleMusBeDifferent(fieldsGroups: Array<any>): void;
}

export default class FieldConstructor extends React.Component<
  FieldConstructorProps
> {
  constructor(props: any) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  state = {
    oldFields: [],
    isModalOpen: false,
    positionOnEdit: 0,
  };

  handleCloseModal = () => {
    this.setState({
      ...this.state,
      isModalOpen: false,
    });
  };

  handleOpenModal = (
    _e: React.ChangeEvent<unknown>,
    positionSelected: number
  ) => {
    this.setState({
      ...this.state,
      positionOnEdit: positionSelected,
      isModalOpen: true,
    });
  };

  handleSaveField = (newField: any, positionField: number) => {
    this.setState({
      isModalOpen: false,
    });

    this.props.handleSaveField(newField, positionField);
  };

  render() {
    const { isModalOpen, positionOnEdit } = this.state;
    const {
      fields,
      pagesFields,
      handleDeleteField,
      handleSaveField,
      addFieldGrid,
      isSoftExpertForm,
      institutions,
      services,
      handleService,
      handleInstitution,
      serviceSelected,
      institutionSelected,
      handleInput,
      name,
      description,
      isLoadingFields,
      handleAddPageField,
      handleDeletePageField,
      handlePageSelected,
      onPage,
      version,
      handleMusBeDifferent,
      differentsFields,
    } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center",
          height: "100%",
          width: "85%",
          border: "solid 1px rbga(255,255,255, .6)",
          borderRadius: "10px",
        }}
      >
        <Grid container style={{ width: "100%", height: "100%" }}>
          <Paper style={{ width: "100%", height: "100%" }} elevation={1}>
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <Grid item xs={12} style={{ padding: "20px" }}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      component="h5"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      Campos del formulario
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="overline" component="span">
                      {`Version : ${version}`}
                    </Typography>
                  </Grid>
                  {isSoftExpertForm && (
                    <Grid item xs={12}>
                      <Typography
                        variant="h5"
                        component="h5"
                        style={{
                          color: "#0d38b1",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        Constructor De Formularios
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Grid style={{ paddingTop: "15px" }} container>
                  <Grid item xs={6} style={{ paddingLeft: "5px" }}>
                    <div style={{ width: "90%" }}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="institutionSelect">
                          Institucion
                        </InputLabel>
                        <Select
                          fullWidth
                          value={institutionSelected}
                          onChange={handleInstitution}
                          input={
                            <OutlinedInput
                              fullWidth
                              labelWidth={12}
                              name="institution"
                              id="institutionSelect"
                            />
                          }
                        >
                          <MenuItem
                            key={"disabled-institution-item"}
                            value=""
                            disabled
                          >
                            Seleccione una institucion
                          </MenuItem>
                          {institutions.map((value: any, index: number) => (
                            <MenuItem key={`options-${index}`} value={value.id}>
                              {value.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ width: "90%" }}>
                      <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="serviceSelect">
                          Servicios
                        </InputLabel>
                        <Select
                          fullWidth
                          value={serviceSelected}
                          onChange={handleService}
                          disabled={services.length === 0}
                          input={
                            <OutlinedInput
                              fullWidth
                              labelWidth={12}
                              name="service"
                              id="serviceSelect"
                            />
                          }
                        >
                          <MenuItem
                            key={"disabled-service-item"}
                            value=""
                            disabled
                          >
                            Seleccione un servicio
                          </MenuItem>
                          {services.map((value: any, index: number) => (
                            <MenuItem key={`options-${index}`} value={value.id}>
                              {value.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                  <Grid style={{ paddingLeft: "5px" }} item xs={6}>
                    <div style={{ width: "90%" }}>
                      <TextField
                        id="name-field"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        placeholder="Nombre..."
                        helperText="Nombre del formulario"
                        value={name}
                        autoComplete="off"
                        autoCapitalize="on"
                        onChange={handleInput}
                        fullWidth
                      />
                    </div>
                  </Grid>
                  <Grid item xs={6}>
                    <div style={{ width: "90%" }}>
                      <TextField
                        id="description-field"
                        name="description"
                        variant="outlined"
                        margin="normal"
                        placeholder="Descripcion..."
                        helperText="Descripcion del formulario"
                        autoComplete="off"
                        autoCapitalize="on"
                        onChange={handleInput}
                        value={description}
                        fullWidth
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid
                item
                xs={12}
                style={{ paddingTop: "10px", paddingLeft: "5px" }}
              >
                <Grid container>
                  {pagesFields.map((_value: any, index: number) => (
                    <Zoom in={true}>
                      <Grid
                        className="btn"
                        item
                        xs={3}
                        style={{
                          display: "flex",
                          alignContent: "center",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Card
                          elevation={0}
                          style={{ borderRadius: "5px", width: "40%" }}
                          onClick={(e) => handlePageSelected(e, index)}
                        >
                          <Typography
                            variant="caption"
                            component="span"
                            style={{
                              display: "flex",
                              alignContent: "center",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "#0d38b1",
                            }}
                          >
                            {onPage === index ? (
                              <strong>{`Pagina - ${index + 1}`}</strong>
                            ) : (
                              <p>{`Pagina - ${index + 1}`}</p>
                            )}
                          </Typography>
                        </Card>
                        {index !== 0 && (
                          <span className="btn">
                            <Delete
                              style={{ color: "#ea1212", width: 15 }}
                              onClick={(e) => handleDeletePageField(e, index)}
                            />
                          </span>
                        )}
                      </Grid>
                    </Zoom>
                  ))}
                  <Grid className="btn" item xs={3}>
                    <Card
                      elevation={0}
                      onClick={handleAddPageField}
                      style={{ borderRadius: "5px", width: "40%" }}
                    >
                      <Add style={{ color: "#0d38b1" }} />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} style={{ paddingTop: "5px" }}>
                <Divider />
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  padding: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                {isLoadingFields ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <CircularProgress color="primary" />
                  </div>
                ) : fields.length > 0 ? (
                  <Droppable droppableId="droppable-1">
                    {(provided) => (
                      <Grid
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        container
                        justify="flex-start"
                        alignContent="center"
                        alignItems="center"
                      >
                        {fields.map((value: any, index: number) => (
                          <Fields
                            field={value}
                            positionField={index}
                            openEditModal={this.handleOpenModal}
                            handleDelete={handleDeleteField}
                            handleSaveField={handleSaveField}
                            addFieldGrid={addFieldGrid}
                          />
                        ))}
                        {provided.placeholder}
                      </Grid>
                    )}
                  </Droppable>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      alignContent: "center",
                    }}
                  >
                    <Typography variant="caption" component="span">
                      Favor agregar campo a esta pagina...
                    </Typography>
                  </div>
                )}
              </Grid>
              <Grid item xs={12}>
                <FieldSelectorAcumulation
                  fields={fields}
                  handleMusBeDifferent={handleMusBeDifferent}
                  differentsFields={differentsFields}
                />
              </Grid>
              <Grid item xs={12}>
                <FieldModal
                  content={
                    <FieldEditForm
                      field={fields[positionOnEdit]}
                      fieldsAddedToGrid={fields[positionOnEdit]}
                      inSlide={isModalOpen}
                      position={positionOnEdit}
                      saveField={this.handleSaveField}
                      fathersFields={fields}
                    />
                  }
                  closeModal={this.handleCloseModal}
                  isModalOpen={isModalOpen}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}
