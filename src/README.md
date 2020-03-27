# Angular Coding Conventions

### Follow 

SRP - Single Responsibility Principle
    One File should contain one component/service/model/pipe/directive/module

[1]: DRY - Don't Repeat Yourself

---------------------------------

### Folders : 

L - Locate files easily by name, folder structure
I - Identify what a file does instantly
F - Flat folder structure as long as possible. Sub-folders if no. of files exceed 10.
T - Try to Don't Repeat Yourself [DRY][1]

---------------------------------

### File size : 

400 lines per file
Functions should have less than 75 lines

---------------------------------

### File names :

Follow feature.type.ts, hyphen separate multi words in feature/type
Use .service, .component, .pipe, .module, and .directive for respective file types
Unit test files should have .spec.ts suffix
E2E test files should have .e2e-spec suffix

---------------------------------

### Naming:

    FeatureClassNames
        Ex. AdminUser
    <feature-element-names>
        Ex. admin-users
    featureDirectiveName
        Ex. adminValidate

---------------------------------
