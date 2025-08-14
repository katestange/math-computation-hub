import Navigation from "@/components/Navigation";
import { useEffect } from "react";

const CourseInfo = () => {
  useEffect(() => {
    document.title = "Course Info";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-serif font-bold text-foreground">
              Course Information
            </h1>
          </div>

          <div className="prose max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Course Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goal is to use number theory as the topic/substrate to gain experience in the use of computation in mathematical research. Approximately the first half of the course will consist of guided projects in number theory topics. The second half will be spent on student computational projects (not necessarily number theory; your thesis is a valid choice).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The course will be run as a series of workshops/activities (not lecture). You should have a laptop and access to Sage Math for every day (contact me ahead to get this sorted out as needed). Students will have a great deal of autonomy, especially later in the course.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The goals of the course are:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>Learn the basics of the classical computational algorithms for mathematics (things like space and time complexity, Monte Carlo and Las Vegas algorithms, standard assumptions);</li>
                <li>Study some important examples of such algorithms (e.g. euclidean algorithm, index-calculus-type methods, random walks, lattice reduction, etc.);</li>
                <li>Gain experience with computer-aided mathematical exploration (conjecture and open-ended questions);</li>
                <li>Learn to implement algorithms efficiently in Python and Sage Mathematics Software;</li>
                <li>Learn some interesting number theory; and</li>
                <li>Have copious time for individual projects.</li>
              </ol>
              
              <h3 className="text-xl font-serif font-semibold mt-6 mb-3 text-foreground">Semester plan:</h3>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Week 1:</strong> Python coding worksheets. You can work from where you are (including total beginner).</li>
                <li><strong>Week 2-6:</strong> Case studies in number theory.</li>
                <li><strong>Week 7-13:</strong> Individual projects. Each day 1-2 students will present on their problem/progress and the group will discuss, then we will have working time.</li>
                <li><strong>Week 14-15:</strong> Student final presentations.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Credit</h2>
              <p className="text-muted-foreground leading-relaxed">
                Students wishing to receive credit for the course shall attend regularly, support a productive classroom atmosphere, and complete the individual project and presentations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Projects</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Possible project topics:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground ml-4">
                <li>create a computational tool (possibly to be added to Sage)</li>
                <li>do some computations that will aid you in your thesis project or another research project</li>
                <li>choose an existing research paper in computational mathematics and build off that</li>
                <li>create an open source mathematical showcase project to put on github (for your industry resume)</li>
                <li>combinations and/or other ideas</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My main requirement of the projects is that (1) they teach you skills that fall in the category of both mathematics and computation, and (2) that they are useful to your career path as a PhD student of mathematics.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                For the sake of the ability to communicate and work together, I will require the use of Python and Sage for the course worksheets, but the individual projects can use other tools the student self-teaches.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Pre-requisites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Be taking or have taken the main algebra sequence in our PhD program. Contact me for exceptions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Unexpected changes of format & travel</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I suffer from vestibular migraine. On rare occasions, I may be unable to attend class on short notice. On such days, I expect students to use the classroom hour to continue the regularly planned activities of the classroom without me, e.g. worksheets, presentations or working time. In these cases, <em>class is not cancelled</em>. I will notify everyone via email.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I am planning a few travel days this semester. I will attempt to join class remotely when possible, but class will continue as planned (worksheets), with an appointed TA from among the students as the guide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-semibold mb-4 text-foreground">Standard Syllabus Statements</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All standard CU required syllabus statements apply to this class. See:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <a 
                  href="https://www.colorado.edu/academicaffairs/policies-customs-guidelines/required-syllabus-statements" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary underline hover:no-underline"
                >
                  https://www.colorado.edu/academicaffairs/policies-customs-guidelines/required-syllabus-statements
                </a>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                In case of illness or religious observance, please email me and arrangements will be made to accommodate.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseInfo;