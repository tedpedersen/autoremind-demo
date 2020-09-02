var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
  
      // an array that will be populated with substring matches
      matches = [];
  
      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');
  
      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
  
      cb(matches);
    };
  };
  
  var states = ["Jeniffer Rase",
  "Alisia Havis",
  "Annie Chia",
  "Lai Deason",
  "Monique Steffy",
  "Robbin Eaglin",
  "Shila Olberding",
  "Grady Friel",
  "Armandina Lehto",
  "Magdalena Pressey",
  "Rose Woodie",
  "Celinda Litke",
  "Laurine Sirianni",
  "Letitia Lampron",
  "Rosario Polley",
  "Verdell Gowins",
  "Colby Bourget",
  "Earlean Upshaw",
  "Brianne Lively",
  "Jackeline Stanbery",
  "Maryrose Rosales",
  "Patrica Julia",
  "Jammie Christman",
  "Yajaira Jorge",
  "Britt Hillyard",
  "Mozella Bryon",
  "Trudi Haberle",
  "Marion Imhoff",
  "Jackie Segura",
  "Terrance Bobb",
  "Madison Mort",
  "Ara Barrick",
  "Kathy Lott",
  "John Mires",
  "John Stott",
  "John Smith",
  "Velda Carlos",
  "Janetta Sacco",
  "Carlyn Kammerer",
  "Pat Pakele",
  "Florence Legros",
  "Hyo Troupe",
  "Wan Bible",
  "Lou Fontana",
  "Chanelle Netherton",
  "Gertrud Unzueta",
  "Cary Kurek",
  "Arnoldo Buchler",
  "Dorethea Hook",
  "Livia Sturgill",
  "Cammie Kamerer"
  ];
  
  $('#search').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    source: substringMatcher(states)
  });

  