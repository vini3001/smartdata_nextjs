export interface FiltersProps {
    communication: {id: number, name: string, isDropdown: boolean, submenu: []}[];
    dimensions: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    goals: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    indicators: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    period: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    teams: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    clients: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    enterprise: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    fires: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    grouppeople: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    information: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
    people: {id: number, name: string, isDropdown: boolean, submenu: string[]}[];
}

export const filters: FiltersProps =
    {
      communication: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Descrição', isDropdown: false, submenu: [] },
        {id: 3, name: 'Meio de Comunicação', isDropdown: false, submenu: [] },
        {id: 4, name: 'Tipo de Intervalo', isDropdown: false, submenu: [] },
        {id: 5, name: 'Intervalo de Repetição', isDropdown: false, submenu: [] },
        {id: 6, name: 'Data de Início', isDropdown: false, submenu: [] },
        {id: 7, name: 'Data de Fim', isDropdown: false, submenu: [] }],

      dimensions: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Descrição', isDropdown: false, submenu: [] }],

      goals: [{id: 1, name: 'Indicador', isDropdown: false, submenu: [] },
        {id: 2, name: 'Sentido da Meta', isDropdown: true, submenu: ['Para Cima', 'Para Baixo'] },
        {id: 3, name: 'Permitir Lanç. Manual', isDropdown: true, submenu: ['Sim', 'Não'] },
        {id: 4, name: 'Requer FCA', isDropdown: true, submenu: ['Sim', 'Não'] },
        {id: 5, name: 'Período', isDropdown: false, submenu: [] },
        {id: 6, name: 'Empresa', isDropdown: false, submenu: [] },
        {id: 7, name: 'Equipe', isDropdown: false, submenu: [] }],

      indicators: [{id: 1, name: 'Indicador', isDropdown: false, submenu: [] },
        {id: 2, name: 'Conceito', isDropdown: false, submenu: [] },
        {id: 3, name: 'Relevância', isDropdown: false, submenu: [] },
        {id: 4, name: 'Unidade de Medida', isDropdown: false, submenu: [] },
        {id: 5, name: 'Correção NRT', isDropdown: false, submenu: [] },
        {id: 6, name: 'Departamento', isDropdown: false, submenu: [] },
        {id: 7, name: 'Assunto', isDropdown: false, submenu: [] },
        {id: 8, name: 'Tipo de Indicador', isDropdown: false, submenu: [] },
        {id: 9, name: 'Maturidade', isDropdown: false, submenu: [] },
        {id: 10, name: 'Complexidade', isDropdown: false, submenu: [] },
        {id: 11, name: 'Destino', isDropdown: false, submenu: [] },
        {id: 12, name: 'Origem', isDropdown: false, submenu: [] },
        {id: 13, name: 'Onda', isDropdown: false, submenu: [] },
        {id: 14, name: 'Tipo de Visão', isDropdown: false, submenu: [] },
        {id: 15, name: 'Informações', isDropdown: false, submenu: [] },
        {id: 16, name: 'Dimensões', isDropdown: false, submenu: [] },],

      period: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Data Inicial', isDropdown: false, submenu: [] },
        {id: 3, name: 'Data Final', isDropdown: false, submenu: [] },
        {id: 4, name: 'Tipo de Período', isDropdown: false, submenu: [] }],

      teams: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Departamento', isDropdown: false, submenu: [] },
        {id: 3, name: 'Tipo de Equipe', isDropdown: false, submenu: [] },
        {id: 4, name: 'Responsável', isDropdown: false, submenu: [] }],

      clients: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Nome Abreviado', isDropdown: false, submenu: [] },
        {id: 3, name: 'Nome Contato', isDropdown: false, submenu: [] },
        {id: 4, name: 'Usuário Administrador', isDropdown: false, submenu: [] }],

      enterprise: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Localização', isDropdown: false, submenu: [] }],

      fires: [{id: 1, name: 'Deploy', isDropdown: true, submenu: ['Todos', 'Sucesso', 'Pendente', 'Falha'] },
        {id: 2, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 3, name: 'Grupo de Pessoas', isDropdown: false, submenu: [] },
        {id: 4, name: 'Informações', isDropdown: false, submenu: [] },
        {id: 5, name: 'Grupo de Informações', isDropdown: false, submenu: [] }],

      grouppeople: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] }],

      information: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'ID do Cliente', isDropdown: false, submenu: [] },
        {id: 3, name: 'Origem', isDropdown: false, submenu: [] },
        {id: 4, name: 'Formato Destino', isDropdown: false, submenu: [] },
        {id: 5, name: 'Grupo', isDropdown: false, submenu: [] }],

      people: [{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'Cargo', isDropdown: false, submenu: [] },
        {id: 3, name: 'Departamento', isDropdown: false, submenu: [] },
        {id: 4, name: 'Grupo', isDropdown: false, submenu: [] }],
      
     }