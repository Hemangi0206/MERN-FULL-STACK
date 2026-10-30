const college = {
  student: [
    {
      name: "Hemangi",
      age: 19,
      gender: "female",
      branch: "cse",
      projects: [{ projectName: "abc", timeline: 3, role: "xyz" }],
    },

    {
      name: "bhoomika",
      age: 18,
      gender: "female",
      branch: "cse",
      projects: [{ projectName: "abc", timeline: 3, role: "xyz" }],
    },
    {
      name: "Rahul",
      age: 20,
      gender: "male",
      branch: "cse",
      projects: [{ projectName: "abc", timeline: 3, role: "xyz" }],
    },
  ],
};

console.log(college);
console.log((college.student[0].name = "harshu"));
console.log(college);
console.log(college.student);
college.student[2].branch = "AIDS";
college.student[1].projects[0]="cde";
delete college.student[0].name;
