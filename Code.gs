function crossFilterTest() {

// get a bunch of data - all airports
  var fusionHandler = new cDataHandler.DataHandler("1Ug6IA-L5NKq79I0ioilPXlojEklytFMMtKDNzvA",cDataHandler.dhConstants.DB.FUSION,undefined, 'airports');               
  var fusionData = fusionHandler.query();
  
// load it to crossFilter
  var cf = cCrossFilter.crossfilter(fusionData.data);

// how many airports are there?
  Logger.log( cf.groupAll().reduceCount().value());

// create a states dimension
  var states = cf.dimension ( function (d) { return d.state });

// how many airports are there in california
  Logger.log( states.filter("CA").bottom(Infinity).length);

// list all states and the count of airports
  Logger.log( states.filter(null).group().all());
}

