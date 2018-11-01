
// if you call a library that need an advanced service thats not referenced in your main script you have to provole an authorization dialog.
function dummyFusion() {
  FusionTables.Query.sql('dummy');
  FusionTables.Column.remove();
}