export const translateColumns = {
    // Root
    noRowsLabel: 'Sem linhas',
    noResultsOverlayLabel: 'Nenhum resultado encontrado.',
    noColumnsOverlayLabel: 'Sem colunas',
    noColumnsOverlayManageColumns: 'Gerenciar colunas',

    // Density selector toolbar button text
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacta',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',

    // Columns selector toolbar button text
    toolbarColumns: 'Colunas',
    toolbarColumnsLabel: 'Selecionar colunas',

    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count: any) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,

    // Quick filter toolbar field
    toolbarQuickFilterPlaceholder: 'Buscar…',
    toolbarQuickFilterLabel: 'Buscar',
    toolbarQuickFilterDeleteIconLabel: 'Limpar',

    // Prompt toolbar field
    toolbarPromptControlPlaceholder: 'Digite um comando…',
    toolbarPromptControlWithRecordingPlaceholder: 'Digite ou grave um comando…',
    toolbarPromptControlRecordingPlaceholder: 'Ouvindo comando…',
    toolbarPromptControlLabel: 'Entrada de comando',
    toolbarPromptControlRecordButtonDefaultLabel: 'Gravar',
    toolbarPromptControlRecordButtonActiveLabel: 'Parar gravação',
    toolbarPromptControlSendActionLabel: 'Enviar',
    toolbarPromptControlSendActionAriaLabel: 'Enviar comando',
    toolbarPromptControlErrorMessage:
    'Ocorreu um erro ao processar a solicitação. Tente novamente com outro comando.',

    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Baixar como CSV',
    toolbarExportPrint: 'Imprimir',
    toolbarExportExcel: 'Baixar como Excel',

    // Columns management text
    columnsManagementSearchTitle: 'Buscar',
    columnsManagementNoColumns: 'Sem colunas',
    columnsManagementShowHideAllText: 'Mostrar/Ocultar tudo',
    columnsManagementReset: 'Redefinir',
    columnsManagementDeleteIconLabel: 'Limpar',

    // Filter panel text
    filterPanelAddFilter: 'Adicionar filtro',
    filterPanelRemoveAll: 'Remover todos',
    filterPanelDeleteIconLabel: 'Excluir',
    filterPanelLogicOperator: 'Operador lógico',
    filterPanelOperator: 'Operador',
    filterPanelOperatorAnd: 'E',
    filterPanelOperatorOr: 'Ou',
    filterPanelColumns: 'Colunas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Valor do filtro',

    // Filter operators text
    filterOperatorContains: 'contém',
    filterOperatorDoesNotContain: 'não contém',
    filterOperatorEquals: 'é igual a',
    filterOperatorDoesNotEqual: 'é diferente de',
    filterOperatorStartsWith: 'começa com',
    filterOperatorEndsWith: 'termina com',
    filterOperatorIs: 'é',
    filterOperatorNot: 'não é',
    filterOperatorAfter: 'é depois de',
    filterOperatorOnOrAfter: 'é em ou depois de',
    filterOperatorBefore: 'é antes de',
    filterOperatorOnOrBefore: 'é em ou antes de',
    filterOperatorIsEmpty: 'está vazio',
    filterOperatorIsNotEmpty: 'não está vazio',
    filterOperatorIsAnyOf: 'é qualquer um de',
    'filterOperator=': '=',
    'filterOperator!=': '!=',
    'filterOperator>': '>',
    'filterOperator>=': '>=',
    'filterOperator<': '<',
    'filterOperator<=': '<=',

    // Header filter operators text
    headerFilterOperatorContains: 'Contém',
    headerFilterOperatorDoesNotContain: 'Não contém',
    headerFilterOperatorEquals: 'É igual a',
    headerFilterOperatorDoesNotEqual: 'É diferente de',
    headerFilterOperatorStartsWith: 'Começa com',
    headerFilterOperatorEndsWith: 'Termina com',
    headerFilterOperatorIs: 'É',
    headerFilterOperatorNot: 'Não é',
    headerFilterOperatorAfter: 'É depois de',
    headerFilterOperatorOnOrAfter: 'É em ou depois de',
    headerFilterOperatorBefore: 'É antes de',
    headerFilterOperatorOnOrBefore: 'É em ou antes de',
    headerFilterOperatorIsEmpty: 'Está vazio',
    headerFilterOperatorIsNotEmpty: 'Não está vazio',
    headerFilterOperatorIsAnyOf: 'É qualquer um de',
    'headerFilterOperator=': 'É igual a',
    'headerFilterOperator!=': 'É diferente de',
    'headerFilterOperator>': 'Maior que',
    'headerFilterOperator>=': 'Maior ou igual a',
    'headerFilterOperator<': 'Menor que',
    'headerFilterOperator<=': 'Menor ou igual a',
    headerFilterClear: 'Limpar filtro',

    // Filter values text
    filterValueAny: 'qualquer',
    filterValueTrue: 'verdadeiro',
    filterValueFalse: 'falso',

    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuAriaLabel: (columnName: any) => `Menu da coluna ${columnName}`,
    columnMenuShowColumns: 'Mostrar colunas',
    columnMenuManageColumns: 'Gerenciar colunas',
    columnMenuFilter: 'Filtrar',
    columnMenuHideColumn: 'Ocultar coluna',
    columnMenuUnsort: 'Remover ordenação',
    columnMenuSortAsc: 'Ordenar ASC',
    columnMenuSortDesc: 'Ordenar DESC',

    // Column header text
    columnHeaderFiltersTooltipActive: (count: any) =>
    count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',

    // Rows selected footer text
    footerRowSelected: (count: any) =>
    count !== 1
        ? `${count.toLocaleString()} linhas selecionadas`
        : `${count.toLocaleString()} linha selecionada`,

    // Total row amount footer text
    footerTotalRows: 'Total de linhas:',

    // Total visible row amount footer text
    footerTotalVisibleRows: ({visibleCount, totalCount}: any) =>
    `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Seleção por caixa',
    checkboxSelectionSelectAllRows: 'Selecionar todas as linhas',
    checkboxSelectionUnselectAllRows: 'Desmarcar todas as linhas',
    checkboxSelectionSelectRow: 'Selecionar linha',
    checkboxSelectionUnselectRow: 'Desmarcar linha',

    // Boolean cell text
    booleanCellTrueLabel: 'sim',
    booleanCellFalseLabel: 'não',

    // Actions cell more text
    actionsCellMore: 'mais',

    // Column pinning text
    pinToLeft: 'Fixar à esquerda',
    pinToRight: 'Fixar à direita',
    unpin: 'Desafixar',

    // Tree Data
    treeDataGroupingHeaderName: 'Grupo',
    treeDataExpand: 'ver filhos',
    treeDataCollapse: 'ocultar filhos',

    // Grouping columns
    groupingColumnHeaderName: 'Grupo',
    groupColumn: (name: any) => `Agrupar por ${name}`,
    unGroupColumn: (name: any) => `Parar de agrupar por ${name}`,

    // Master/detail
    detailPanelToggle: 'Alternar painel de detalhes',
    expandDetailPanel: 'Expandir',
    collapseDetailPanel: 'Recolher',

    // Pagination
    paginationRowsPerPage: 'Linhas por página:',
    paginationDisplayedRows: ({ from, to, count, estimated }: any) => {
    if (!estimated) {
        return `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`;
    }
    const estimatedLabel = estimated && estimated > to ? `cerca de ${estimated}` : `mais de ${to}`;
    return `${from}–${to} de ${count !== -1 ? count : estimatedLabel}`;
    },
    paginationItemAriaLabel: (type: any) => {
    if (type === 'first') return 'Ir para a primeira página';
    if (type === 'last') return 'Ir para a última página';
    if (type === 'next') return 'Ir para a próxima página';
    return 'Ir para a página anterior';
    },

    // Row reordering text
    rowReorderingHeaderName: 'Reordenação de linhas',

    // Aggregation
    aggregationMenuItemHeader: 'Agrupamento',
    aggregationFunctionLabelSum: 'soma',
    aggregationFunctionLabelAvg: 'média',
    aggregationFunctionLabelMin: 'mínimo',
    aggregationFunctionLabelMax: 'máximo',
    aggregationFunctionLabelSize: 'tamanho',

}