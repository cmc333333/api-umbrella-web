//= require jquery/jquery.js
//= require jquery_ujs
//= require bootstrap
//= require ace-builds/src/ace
//= require ace-builds/src/mode-json
//= require ace-builds/src/mode-xml
//= require ace-builds/src/mode-yaml
//= require handlebars
//= require ember
//= require qtip2
//= require lodash/lodash.compat
//= require datatables/jquery.dataTables.js
//= require vendor/datatables-plugins/dataTables.bootstrap
//= require jsdiff/diff
//= require ic-ajax/dist/globals/main.js
//= require vendor/ember-model/ember-model.js
//= require vendor/ember-easyForm
//= require vendor/ember-validations
//= require marked
//= require pnotify
//= require bootbox
//= require jquery.scrollTo
//= require vendor/jquery-ui-1.10.3.custom
//= require jquery-bbq-deparam
//= require selectize/standalone/selectize
//= require inflection
//= require jstz-detect/jstz
//= require vendor/jquery.slugify
//= require moment
//= require bootstrap-daterangepicker
//= require livestampjs/livestamp
//= require numeral
//= require vendor/jquery.blockUI
//= require vendor/jQuery-QueryBuilder/query-builder.standalone.js
//= require spinjs
//= require vendor/dirtyforms/jquery.dirtyforms
//= require vendor/jquery.truncate
//= require admin/app
//= require_self

$(document).ready(function() {
  // Use the default browser "beforeunload" dialog.
  $.DirtyForms.dialog = false;
  $(window).bind('beforeunload', function() {
    if($.DirtyForms.isDirty()) {
      return $.DirtyForms.message;
    } else {
      return;
    }
  });

  $('form').dirtyForms();

  // Setup qTip defaults.
  $(document).on('click', 'a[rel=tooltip]', function(event) {
    $(this).qtip({
      overwrite: false,
      show: {
        event: event.type,
        ready: true,
        solo: true
      },
      hide: {
        event: 'unfocus'
      },
      style: {
        classes: 'qtip-bootstrap ' + $(this).data('tooltip-class'),
      },
      position: {
        viewport: true,
        my: 'bottom left',
        at: 'top center',
        adjust: {
          y: 2
        }
      }
    }, event);

    event.preventDefault();
  });

  $.blockUI.defaults.fadeIn = 0;
  $.blockUI.defaults.fadeOut = 0;

  $(document).on('click', 'a[rel=popover]', function(event) {
    $(this).qtip({
      overwrite: false,
      show: {
        event: event.type,
        ready: true,
        solo: true
      },
      hide: {
        event: 'unfocus'
      },
      content: {
        text: function(event) {
          var target = $(event.target).attr('href');
          var content = $(target).html();

          return content;
        },
      },
      style: {
        classes: 'qtip-bootstrap qtip-wide',
      },
      position: {
        viewport: false,
        my: 'top left',
        at: 'bottom center',
        adjust: {
          y: 2
        }
      }
    }, event);

    event.preventDefault();
  });
});
