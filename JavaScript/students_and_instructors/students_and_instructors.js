	var students = [ 
     {first_name: 'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
	];
	function studentsFullName()
	{
	for (var i = 0; i < students.length; i++) 
		{
			document.write(students[i].first_name + " " + students[i].last_name + "<br/>");
		}
	}
	studentsFullName(students);