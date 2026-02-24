/* ==========================================================================
   REDDASH ADMIN TEMPLATE - DATATABLES INITIALIZATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (typeof $.fn === 'undefined' || typeof $.fn.DataTable === 'undefined') return;

  const isDark = () => document.documentElement.getAttribute('data-theme') === 'dark';

  // Common DataTable defaults
  $.extend(true, $.fn.dataTable.defaults, {
    language: {
      search: '',
      searchPlaceholder: 'Search records...',
      lengthMenu: 'Show _MENU_ entries',
      info: 'Showing _START_ to _END_ of _TOTAL_ records',
      infoEmpty: 'No records available',
      infoFiltered: '(filtered from _MAX_ total records)',
      paginate: {
        first: '<i class="ri-skip-back-line"></i>',
        last: '<i class="ri-skip-forward-line"></i>',
        next: '<i class="ri-arrow-right-s-line"></i>',
        previous: '<i class="ri-arrow-left-s-line"></i>'
      },
      emptyTable: '<div class="empty-state"><i class="ri-table-line"></i><div class="empty-state-title">No data available</div></div>',
      zeroRecords: '<div class="empty-state"><i class="ri-search-line"></i><div class="empty-state-title">No matching records found</div></div>'
    },
    pageLength: 10,
    lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']],
    responsive: true,
    dom: '<"datatable-top d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3"<"datatable-length"l><"datatable-search"f>>' +
         '<"datatable-wrapper"t>' +
         '<"datatable-bottom d-flex align-items-center justify-content-between flex-wrap gap-3 mt-3"<"datatable-info"i><"datatable-paging"p>>',
    drawCallback: function () {
      // Style paginator
      const wrapper = this.closest('.dataTables_wrapper');
      wrapper?.querySelectorAll('.paginate_button').forEach(btn => {
        btn.classList.add('page-item');
        if (btn.classList.contains('current')) btn.classList.add('active');
        if (btn.classList.contains('disabled')) btn.classList.add('disabled');
      });
    }
  });

  // Main users/transactions table
  const usersTable = document.getElementById('usersDataTable');
  if (usersTable) {
    $(usersTable).DataTable({
      order: [[0, 'asc']],
      columnDefs: [
        { orderable: false, targets: [-1] }
      ]
    });
  }

  // Transactions table
  const txnTable = document.getElementById('transactionsTable');
  if (txnTable) {
    $(txnTable).DataTable({
      order: [[0, 'desc']],
      pageLength: 5,
      lengthMenu: [[5, 10, 25], [5, 10, 25]]
    });
  }

  // Projects table
  const projectsTable = document.getElementById('projectsDataTable');
  if (projectsTable) {
    $(projectsTable).DataTable({
      order: [[2, 'desc']],
      columnDefs: [
        { orderable: false, targets: [3, 4, -1] }
      ]
    });
  }

  // Style DataTable inputs/selects after init
  document.querySelectorAll('.dataTables_filter input').forEach(input => {
    input.classList.add('form-control');
    input.style.marginLeft = '8px';
    input.style.display = 'inline-block';
    input.style.width = 'auto';
  });

  document.querySelectorAll('.dataTables_length select').forEach(sel => {
    sel.classList.add('form-control');
    sel.style.display = 'inline-block';
    sel.style.width = 'auto';
    sel.style.margin = '0 8px';
  });
});
