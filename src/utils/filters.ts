export type submenuProps = {
  id: number
  name: string
  value: string
  label: string,
}

export interface FiltersProps {
    communication: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    dimensions: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    goals: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    indicators: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    period: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    teams: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    clients: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    enterprise: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    fires: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    grouppeople: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    information: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
    people: {id: number, name: string, label?: string, isDropdown: boolean, submenu: submenuProps[]}[];
}

export const filters: FiltersProps =
    {
      communication: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Descrição', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Meio de Comunicação', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Tipo de Intervalo', label: '', isDropdown: false, submenu: [] },
        {id: 5, name: 'Intervalo de Repetição', label: '', isDropdown: false, submenu: [] },
        {id: 6, name: 'Data de Início', label: '', isDropdown: false, submenu: [] },
        {id: 7, name: 'Data de Fim', label: '', isDropdown: false, submenu: [] }],

      dimensions: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Descrição', label: '', isDropdown: false, submenu: [] }],

      goals: [{id: 1, name: 'Indicador', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Sentido da Meta', isDropdown: true, submenu: [{id: 0, name: 'Para Cima', label: '', value: 'up'}, 
                                                                     {id: 1, name: 'Para Baixo', label: '', value: 'down'}] },
        {id: 3, name: 'Permitir Lanç. Manual', isDropdown: true, submenu: [{id: 0, name:'Sim', label: '', value: 'up'}, 
                                                                           {id: 0, name:'Não', label: '', value: 'up'}] },
        {id: 4, name: 'Requer FCA', isDropdown: true, submenu: [{id: 0, name:'Sim', label: '', value: 'up'}, 
                                                                {id: 0, name:'Não', label: '', value: 'up'}] },
        {id: 5, name: 'Período', label: '', isDropdown: false, submenu: [] },
        {id: 6, name: 'Empresa', label: '', isDropdown: false, submenu: [] },
        {id: 7, name: 'Equipe', label: '', isDropdown: false, submenu: [] }],

      indicators: [{id: 1, name: 'Indicador', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Conceito', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Relevância', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Unidade de Medida', label: '', isDropdown: false, submenu: [] },
        {id: 5, name: 'Correção NRT', label: '', isDropdown: false, submenu: [] },
        {id: 6, name: 'Departamento', label: '', isDropdown: false, submenu: [] },
        {id: 7, name: 'Assunto', label: '', isDropdown: false, submenu: [] },
        {id: 8, name: 'Tipo de Indicador', label: '', isDropdown: false, submenu: [] },
        {id: 9, name: 'Maturidade', label: '', isDropdown: false, submenu: [] },
        {id: 10, name: 'Complexidade', label: '', isDropdown: false, submenu: [] },
        {id: 11, name: 'Destino', label: '', isDropdown: false, submenu: [] },
        {id: 12, name: 'Origem', label: '', isDropdown: false, submenu: [] },
        {id: 13, name: 'Onda', label: '', isDropdown: false, submenu: [] },
        {id: 14, name: 'Tipo de Visão', label: '', isDropdown: false, submenu: [] },
        {id: 15, name: 'Informações', label: '', isDropdown: false, submenu: [] },
        {id: 16, name: 'Dimensões', label: '', isDropdown: false, submenu: [] },],

      period: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Data Inicial', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Data Final', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Tipo de Período', label: '', isDropdown: false, submenu: [] }],

      teams: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Departamento', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Tipo de Equipe', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Responsável', label: '', isDropdown: false, submenu: [] }],

      clients: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Nome Abreviado', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Nome Contato', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Usuário Administrador', label: '', isDropdown: false, submenu: [] }],

      enterprise: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'Localização', label: '', isDropdown: false, submenu: [] }],

      fires: [{id: 1, name: 'Deploy', isDropdown: true, submenu: [{id: 0, name:'Todos', label: '', value: 'up'},
                                                                  {id: 1, name:'Sucesso', label: '', value: 'up'},
                                                                  {id: 2, name:'Pendente', label: '', value: 'up'},
                                                                  {id: 3, name:'Falha', label: '', value: 'up'}] },
        {id: 2, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Grupo de Pessoas', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Informações', label: '', isDropdown: false, submenu: [] },
        {id: 5, name: 'Grupo de Informações', label: '', isDropdown: false, submenu: [] }],

      grouppeople: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] }],

      information: [{id: 1, name: 'Nome', label: '', isDropdown: false, submenu: [] },
        {id: 2, name: 'ID do Cliente', label: '', isDropdown: false, submenu: [] },
        {id: 3, name: 'Origem', label: '', isDropdown: false, submenu: [] },
        {id: 4, name: 'Formato Destino', label: '', isDropdown: false, submenu: [] },
        {id: 5, name: 'Grupo', label: '', isDropdown: false, submenu: [] }],

      people: [{id: 1, name: 'name', label: 'Nome', isDropdown: false, submenu: [] },
        {id: 2, name: 'position', label: 'Cargo', isDropdown: false, submenu: [] },
        {id: 3, name: 'departament', label: 'Posição', isDropdown: false, submenu: [] },
        {id: 4, name: 'group', label: 'Grupo', isDropdown: false, submenu: [] }],
      
     }