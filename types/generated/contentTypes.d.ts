import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAsistenciaAsistencia extends Struct.CollectionTypeSchema {
  collectionName: 'asistencias';
  info: {
    displayName: 'Asistencia';
    pluralName: 'asistencias';
    singularName: 'asistencia';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clave_sesion: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    implementacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::implementacion.implementacion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::asistencia.asistencia'
    > &
      Schema.Attribute.Private;
    participante_asistencia_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::participante-asistencia-registro.participante-asistencia-registro'
    >;
    publishedAt: Schema.Attribute.DateTime;
    tipo_sesion: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCctCct extends Struct.CollectionTypeSchema {
  collectionName: 'ccts';
  info: {
    description: '';
    displayName: 'CCT';
    pluralName: 'ccts';
    singularName: 'cct';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    alumnos_hombres: Schema.Attribute.Integer;
    alumnos_mujeres: Schema.Attribute.Integer;
    alumnos_total: Schema.Attribute.Integer;
    aulas_en_uso: Schema.Attribute.Integer;
    aulas_existencia: Schema.Attribute.Integer;
    calle_posterior: Schema.Attribute.String;
    clave: Schema.Attribute.String;
    clave_entidad: Schema.Attribute.String;
    clave_localidad: Schema.Attribute.String;
    clave_municipio: Schema.Attribute.String;
    clave_turno: Schema.Attribute.String;
    codigo_postal: Schema.Attribute.String;
    coding_postal: Schema.Attribute.String;
    colonia: Schema.Attribute.String;
    control: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    docentes_hombres: Schema.Attribute.Integer;
    docentes_mujeres: Schema.Attribute.Integer;
    docentes_total: Schema.Attribute.Integer;
    domicilio: Schema.Attribute.String;
    entre_calle: Schema.Attribute.String;
    latitud: Schema.Attribute.String;
    latitud_dms: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::cct.cct'> &
      Schema.Attribute.Private;
    longitud: Schema.Attribute.String;
    longitud_dms: Schema.Attribute.String;
    nombre: Schema.Attribute.String;
    nombre_colonia: Schema.Attribute.String;
    nombre_entidad: Schema.Attribute.String;
    nombre_localidad: Schema.Attribute.String;
    nombre_municipio: Schema.Attribute.String;
    nombre_turno: Schema.Attribute.String;
    numero_exterior: Schema.Attribute.String;
    pagina_web: Schema.Attribute.String;
    participantes: Schema.Attribute.Relation<
      'oneToMany',
      'api::participante.participante'
    >;
    publishedAt: Schema.Attribute.DateTime;
    servicio_educativo: Schema.Attribute.String;
    tipo_educativo: Schema.Attribute.String;
    tipo_localidad: Schema.Attribute.String;
    tipo_sostenimiento: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    y_calle: Schema.Attribute.String;
  };
}

export interface ApiCluesClues extends Struct.CollectionTypeSchema {
  collectionName: 'cluess';
  info: {
    description: '';
    displayName: 'CLUES';
    pluralName: 'cluess';
    singularName: 'clues';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    asentamiento: Schema.Attribute.String;
    clave: Schema.Attribute.String;
    clave_entidad: Schema.Attribute.String;
    clave_estatus_operacion: Schema.Attribute.String;
    clave_estrato_unidad: Schema.Attribute.String;
    clave_ins_admin: Schema.Attribute.String;
    clave_institucion: Schema.Attribute.String;
    clave_jurisdiccion: Schema.Attribute.String;
    clave_localidad: Schema.Attribute.String;
    clave_motivo_baja: Schema.Attribute.String;
    clave_municipio: Schema.Attribute.String;
    clave_nivel_atencion: Schema.Attribute.String;
    clave_propiedad_inmueble: Schema.Attribute.String;
    clave_subtipologia: Schema.Attribute.String;
    clave_tipo_asentamiento: Schema.Attribute.String;
    clave_tipo_establecimiento: Schema.Attribute.String;
    clave_tipo_obra: Schema.Attribute.String;
    clave_tipo_vialidad: Schema.Attribute.String;
    clave_tipologia: Schema.Attribute.String;
    clave_ultimo_movimiento: Schema.Attribute.String;
    clave_unidad_movil_marca: Schema.Attribute.String;
    clave_unidad_movil_programa: Schema.Attribute.String;
    clave_unidad_movil_tipo: Schema.Attribute.String;
    clave_unidad_movil_tipologia: Schema.Attribute.String;
    codigo_postal: Schema.Attribute.String;
    comentarios_validacion: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entidad: Schema.Attribute.String;
    estatus_operacion: Schema.Attribute.String;
    estrato_unidad: Schema.Attribute.String;
    extension_1_establecimiento: Schema.Attribute.String;
    extension_2_establecimiento: Schema.Attribute.String;
    fecha_baja: Schema.Attribute.Date;
    fecha_construccion: Schema.Attribute.Date;
    fecha_inicio_operacion: Schema.Attribute.Date;
    fecha_ultimo_movimiento: Schema.Attribute.Date;
    jurisdiccion: Schema.Attribute.String;
    latitud: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localidad: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::clues.clues'> &
      Schema.Attribute.Private;
    longitud: Schema.Attribute.String;
    motivo_baja: Schema.Attribute.String;
    municipio: Schema.Attribute.String;
    nivel_atencion: Schema.Attribute.String;
    nombre_comercial: Schema.Attribute.String;
    nombre_ins_admin: Schema.Attribute.String;
    nombre_institucion: Schema.Attribute.String;
    nombre_subtipologia: Schema.Attribute.String;
    nombre_tipo_establecimiento: Schema.Attribute.String;
    nombre_tipologia: Schema.Attribute.String;
    nombre_unidad: Schema.Attribute.String;
    numero_exterior: Schema.Attribute.String;
    numero_interior: Schema.Attribute.String;
    observaciones_direccion: Schema.Attribute.Text;
    participantes: Schema.Attribute.Relation<
      'oneToMany',
      'api::participante.participante'
    >;
    propiedad_inmueble: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    rfc_establecimiento: Schema.Attribute.String;
    telefono_1_establecimiento: Schema.Attribute.String;
    telefono_2_establecimiento: Schema.Attribute.String;
    tipo_asentamiento: Schema.Attribute.String;
    tipo_obra: Schema.Attribute.String;
    tipo_vialidad: Schema.Attribute.String;
    ultimo_movimiento: Schema.Attribute.String;
    unidad_movil_marca: Schema.Attribute.String;
    unidad_movil_marca_especifica: Schema.Attribute.String;
    unidad_movil_modelo: Schema.Attribute.String;
    unidad_movil_programa: Schema.Attribute.String;
    unidad_movil_tipo: Schema.Attribute.String;
    unidad_movil_tipologia: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    vialidad: Schema.Attribute.String;
  };
}

export interface ApiCorreoParticipanteCorreoParticipante
  extends Struct.CollectionTypeSchema {
  collectionName: 'correo_participantes';
  info: {
    displayName: 'CorreoParticipante';
    pluralName: 'correo-participantes';
    singularName: 'correo-participante';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    correo: Schema.Attribute.Email;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::correo-participante.correo-participante'
    > &
      Schema.Attribute.Private;
    participante: Schema.Attribute.Relation<
      'manyToOne',
      'api::participante.participante'
    >;
    principal: Schema.Attribute.Boolean;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEncuestaCompletadaRegistroEncuestaCompletadaRegistro
  extends Struct.CollectionTypeSchema {
  collectionName: 'encuesta_completada_registros';
  info: {
    displayName: 'EncuestaCompletadaRegistro';
    pluralName: 'encuesta-completada-registros';
    singularName: 'encuesta-completada-registro';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuesta: Schema.Attribute.Relation<'manyToOne', 'api::encuesta.encuesta'>;
    estado: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta-completada-registro.encuesta-completada-registro'
    > &
      Schema.Attribute.Private;
    participacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::participacion.participacion'
    >;
    publishedAt: Schema.Attribute.DateTime;
    respuestas: Schema.Attribute.Relation<
      'oneToMany',
      'api::respuesta.respuesta'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEncuestaPreguntaEncuestaPregunta
  extends Struct.CollectionTypeSchema {
  collectionName: 'encuesta_preguntas';
  info: {
    displayName: 'EncuestaPregunta';
    pluralName: 'encuesta-preguntas';
    singularName: 'encuesta-pregunta';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuesta: Schema.Attribute.Relation<'manyToOne', 'api::encuesta.encuesta'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta-pregunta.encuesta-pregunta'
    > &
      Schema.Attribute.Private;
    pregunta: Schema.Attribute.Relation<'manyToOne', 'api::pregunta.pregunta'>;
    publishedAt: Schema.Attribute.DateTime;
    respuestas: Schema.Attribute.Relation<
      'oneToMany',
      'api::respuesta.respuesta'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEncuestaEncuesta extends Struct.CollectionTypeSchema {
  collectionName: 'encuestas';
  info: {
    description: '';
    displayName: 'Encuesta';
    pluralName: 'encuestas';
    singularName: 'encuesta';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    clave: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuesta_completada_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta-completada-registro.encuesta-completada-registro'
    >;
    encuesta_preguntas: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta-pregunta.encuesta-pregunta'
    >;
    implementaciones: Schema.Attribute.Relation<
      'manyToMany',
      'api::implementacion.implementacion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta.encuesta'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiEtiquetaEtiqueta extends Struct.CollectionTypeSchema {
  collectionName: 'etiquetas';
  info: {
    description: '';
    displayName: 'Etiqueta';
    pluralName: 'etiquetas';
    singularName: 'etiqueta';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::etiqueta.etiqueta'
    > &
      Schema.Attribute.Private;
    nombre: Schema.Attribute.String;
    preguntas: Schema.Attribute.Relation<
      'manyToMany',
      'api::pregunta.pregunta'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiImplementacionImplementacion
  extends Struct.CollectionTypeSchema {
  collectionName: 'implementaciones';
  info: {
    description: '';
    displayName: 'Implementacion';
    pluralName: 'implementaciones';
    singularName: 'implementacion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    asistencias: Schema.Attribute.Relation<
      'oneToMany',
      'api::asistencia.asistencia'
    >;
    ciclo_escolar: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuestas: Schema.Attribute.Relation<
      'manyToMany',
      'api::encuesta.encuesta'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::implementacion.implementacion'
    > &
      Schema.Attribute.Private;
    modulos: Schema.Attribute.Relation<'oneToMany', 'api::modulo.modulo'>;
    nombre: Schema.Attribute.String;
    participaciones: Schema.Attribute.Relation<
      'oneToMany',
      'api::participacion.participacion'
    >;
    periodo: Schema.Attribute.String;
    programa: Schema.Attribute.Relation<'manyToOne', 'api::programa.programa'>;
    publishedAt: Schema.Attribute.DateTime;
    trabajos: Schema.Attribute.Relation<'oneToMany', 'api::trabajo.trabajo'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiModuloProgresoRegistroModuloProgresoRegistro
  extends Struct.CollectionTypeSchema {
  collectionName: 'modulo_progreso_registros';
  info: {
    description: '';
    displayName: 'ModuloProgresoRegistro';
    pluralName: 'modulo-progreso-registros';
    singularName: 'modulo-progreso-registro';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    calificacion: Schema.Attribute.Decimal;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::modulo-progreso-registro.modulo-progreso-registro'
    > &
      Schema.Attribute.Private;
    modulo: Schema.Attribute.Relation<'manyToOne', 'api::modulo.modulo'>;
    participacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::participacion.participacion'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiModuloModulo extends Struct.CollectionTypeSchema {
  collectionName: 'modulos';
  info: {
    description: '';
    displayName: 'Modulo';
    pluralName: 'modulos';
    singularName: 'modulo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    implementacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::implementacion.implementacion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::modulo.modulo'
    > &
      Schema.Attribute.Private;
    modulo_progreso_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::modulo-progreso-registro.modulo-progreso-registro'
    >;
    nombre: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiParticipacionParticipacion
  extends Struct.CollectionTypeSchema {
  collectionName: 'participaciones';
  info: {
    description: '';
    displayName: 'Participacion';
    pluralName: 'participaciones';
    singularName: 'participacion';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    antiguedad: Schema.Attribute.String;
    cct_verificado: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuesta_completada_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta-completada-registro.encuesta-completada-registro'
    >;
    estudiantes_a_cargo: Schema.Attribute.Integer;
    implementacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::implementacion.implementacion'
    >;
    involucramiento: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::participacion.participacion'
    > &
      Schema.Attribute.Private;
    modulo_progreso_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::modulo-progreso-registro.modulo-progreso-registro'
    >;
    obtuvo_constancia: Schema.Attribute.Boolean;
    participa_director: Schema.Attribute.Boolean;
    participante: Schema.Attribute.Relation<
      'manyToOne',
      'api::participante.participante'
    >;
    participante_asistencia_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::participante-asistencia-registro.participante-asistencia-registro'
    >;
    prioridad_kellogg: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    puesto: Schema.Attribute.String;
    puesto_detalle: Schema.Attribute.String;
    rol: Schema.Attribute.String;
    trabajo_realizado_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::trabajo-realizado-registro.trabajo-realizado-registro'
    >;
    turno: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiParticipanteAsistenciaRegistroParticipanteAsistenciaRegistro
  extends Struct.CollectionTypeSchema {
  collectionName: 'participante_asistencia_registros';
  info: {
    description: '';
    displayName: 'ParticipanteAsistenciaRegistro';
    pluralName: 'participante-asistencia-registros';
    singularName: 'participante-asistencia-registro';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    asistencia: Schema.Attribute.Relation<
      'manyToOne',
      'api::asistencia.asistencia'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::participante-asistencia-registro.participante-asistencia-registro'
    > &
      Schema.Attribute.Private;
    participacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::participacion.participacion'
    >;
    presente: Schema.Attribute.Boolean;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiParticipanteParticipante
  extends Struct.CollectionTypeSchema {
  collectionName: 'participantes';
  info: {
    description: '';
    displayName: 'Participante';
    pluralName: 'participantes';
    singularName: 'participante';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    antiguedad: Schema.Attribute.String;
    cct: Schema.Attribute.Relation<'manyToOne', 'api::cct.cct'>;
    cct_verificado: Schema.Attribute.Boolean;
    clues: Schema.Attribute.Relation<'manyToOne', 'api::clues.clues'>;
    correo_participantes: Schema.Attribute.Relation<
      'oneToMany',
      'api::correo-participante.correo-participante'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    curp: Schema.Attribute.String;
    edad: Schema.Attribute.Integer;
    entidad: Schema.Attribute.String;
    estado_civil: Schema.Attribute.String;
    hablante_maya: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    id_externo: Schema.Attribute.String & Schema.Attribute.Unique;
    lengua_indigena: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::participante.participante'
    > &
      Schema.Attribute.Private;
    nivel_educativo: Schema.Attribute.String;
    nombre: Schema.Attribute.String;
    participaciones: Schema.Attribute.Relation<
      'oneToMany',
      'api::participacion.participacion'
    >;
    primer_apellido: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    rfc: Schema.Attribute.String;
    segundo_apellido: Schema.Attribute.String;
    sexo: Schema.Attribute.String;
    telefono: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    uso_app_participantes: Schema.Attribute.Relation<
      'oneToMany',
      'api::uso-app-participante.uso-app-participante'
    >;
  };
}

export interface ApiPreguntaPregunta extends Struct.CollectionTypeSchema {
  collectionName: 'preguntas';
  info: {
    description: '';
    displayName: 'Pregunta';
    pluralName: 'preguntas';
    singularName: 'pregunta';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    codigo: Schema.Attribute.String;
    constructo: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuesta_preguntas: Schema.Attribute.Relation<
      'oneToMany',
      'api::encuesta-pregunta.encuesta-pregunta'
    >;
    escala: Schema.Attribute.String;
    etiquetas: Schema.Attribute.Relation<
      'manyToMany',
      'api::etiqueta.etiqueta'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::pregunta.pregunta'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    subescala: Schema.Attribute.String;
    texto: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiProgramaPrograma extends Struct.CollectionTypeSchema {
  collectionName: 'programas';
  info: {
    description: '';
    displayName: 'Programa';
    pluralName: 'programas';
    singularName: 'programa';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    implementaciones: Schema.Attribute.Relation<
      'oneToMany',
      'api::implementacion.implementacion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::programa.programa'
    > &
      Schema.Attribute.Private;
    nombre: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiRespuestaRespuesta extends Struct.CollectionTypeSchema {
  collectionName: 'respuestas';
  info: {
    displayName: 'Respuesta';
    pluralName: 'respuestas';
    singularName: 'respuesta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    encuesta_completada_registro: Schema.Attribute.Relation<
      'manyToOne',
      'api::encuesta-completada-registro.encuesta-completada-registro'
    >;
    encuesta_pregunta: Schema.Attribute.Relation<
      'manyToOne',
      'api::encuesta-pregunta.encuesta-pregunta'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::respuesta.respuesta'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiTrabajoRealizadoRegistroTrabajoRealizadoRegistro
  extends Struct.CollectionTypeSchema {
  collectionName: 'trabajo_realizado_registros';
  info: {
    description: '';
    displayName: 'TrabajoRealizadoRegistro';
    pluralName: 'trabajo-realizado-registros';
    singularName: 'trabajo-realizado-registro';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    archivo_evidencia: Schema.Attribute.Text;
    completado: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    estado_entrega: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::trabajo-realizado-registro.trabajo-realizado-registro'
    > &
      Schema.Attribute.Private;
    participacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::participacion.participacion'
    >;
    publishedAt: Schema.Attribute.DateTime;
    trabajo: Schema.Attribute.Relation<'manyToOne', 'api::trabajo.trabajo'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    valor: Schema.Attribute.Decimal;
  };
}

export interface ApiTrabajoTrabajo extends Struct.CollectionTypeSchema {
  collectionName: 'trabajos';
  info: {
    displayName: 'Trabajo';
    pluralName: 'trabajos';
    singularName: 'trabajo';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    implementacion: Schema.Attribute.Relation<
      'manyToOne',
      'api::implementacion.implementacion'
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::trabajo.trabajo'
    > &
      Schema.Attribute.Private;
    nombre: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    trabajo_realizado_registros: Schema.Attribute.Relation<
      'oneToMany',
      'api::trabajo-realizado-registro.trabajo-realizado-registro'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiUsoAppParticipanteUsoAppParticipante
  extends Struct.CollectionTypeSchema {
  collectionName: 'uso_app_participantes';
  info: {
    description: '';
    displayName: 'UsoAppParticipante';
    pluralName: 'uso-app-participantes';
    singularName: 'uso-app-participante';
  };
  options: {
    draftAndPublish: false;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    descargo_app: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::uso-app-participante.uso-app-participante'
    > &
      Schema.Attribute.Private;
    minutos_uso_app: Schema.Attribute.Decimal;
    participante: Schema.Attribute.Relation<
      'manyToOne',
      'api::participante.participante'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::asistencia.asistencia': ApiAsistenciaAsistencia;
      'api::cct.cct': ApiCctCct;
      'api::clues.clues': ApiCluesClues;
      'api::correo-participante.correo-participante': ApiCorreoParticipanteCorreoParticipante;
      'api::encuesta-completada-registro.encuesta-completada-registro': ApiEncuestaCompletadaRegistroEncuestaCompletadaRegistro;
      'api::encuesta-pregunta.encuesta-pregunta': ApiEncuestaPreguntaEncuestaPregunta;
      'api::encuesta.encuesta': ApiEncuestaEncuesta;
      'api::etiqueta.etiqueta': ApiEtiquetaEtiqueta;
      'api::implementacion.implementacion': ApiImplementacionImplementacion;
      'api::modulo-progreso-registro.modulo-progreso-registro': ApiModuloProgresoRegistroModuloProgresoRegistro;
      'api::modulo.modulo': ApiModuloModulo;
      'api::participacion.participacion': ApiParticipacionParticipacion;
      'api::participante-asistencia-registro.participante-asistencia-registro': ApiParticipanteAsistenciaRegistroParticipanteAsistenciaRegistro;
      'api::participante.participante': ApiParticipanteParticipante;
      'api::pregunta.pregunta': ApiPreguntaPregunta;
      'api::programa.programa': ApiProgramaPrograma;
      'api::respuesta.respuesta': ApiRespuestaRespuesta;
      'api::trabajo-realizado-registro.trabajo-realizado-registro': ApiTrabajoRealizadoRegistroTrabajoRealizadoRegistro;
      'api::trabajo.trabajo': ApiTrabajoTrabajo;
      'api::uso-app-participante.uso-app-participante': ApiUsoAppParticipanteUsoAppParticipante;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
