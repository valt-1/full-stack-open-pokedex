# Exercise 11.1 Warming Up
## CI/CD for a Python application

A common tool for linting in Python is Pylint, which can be used to check both logical and stylistic issues. However, it requires a lot of configuration at the setup stage. A good choice for testing would be Pytest, which is easy to use, easy to customize with plugins, and also compatible with possible legacy tests made with Python's unittest. As an interpreted language, an actual build step is not really needed. However, the installed dependecies should be included in a requirements file to make sure that the application can run correctly.

Some alternatives to Jenkins and GitHub Actions include CircleCI, GitLab CI and Travis CI. CircleCI, for example, can be self-hosted or used as a cloud service.

Cloud-based CI setup might be better in this case, since it might be too complicated to set up a self-hosted CI server for a small team of 6. However, the self-hosted option may be good if this team is part of a larger organization where also others can take advantage of the self-hosted environment. The choice also depends on the scale and type of project, and on how much freedom is needed in configuring the CI environment.
