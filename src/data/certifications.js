export const certifications = [
  {
    id: 'comptia-security-plus',
    careerPath: 'cybersecurity',
    name: { en: 'CompTIA Security+ (SY0-701)', ar: 'كومبتيا سيكيوريتي+ (SY0-701)' },
    shortName: { en: 'Security+', ar: 'سيكيوريتي+' },
    description: {
      en: 'The most widely held certification for validating baseline cybersecurity skills. Required by the US Department of Defense and recognized globally by employers.',
      ar: 'أكثر شهادة معتمدة للتحقق من مهارات الأمن السيبراني الأساسية. مطلوبة من وزارة الدفاع الأمريكية ومعترف بها عالمياً.'
    },
    organization: 'CompTIA',
    difficulty: 'intermediate',
    estimatedWeeks: 10,
    examCost: '$404',
    passingScore: '750/900',
    examDuration: '90 minutes',
    totalQuestions: '90 questions',
    officialExamUrl: 'https://www.comptia.org/certifications/security',
    officialSiteUrl: 'https://www.comptia.org',
    chapters: [
      {
        id: 'sec-ch1',
        title: { en: 'General Security Concepts', ar: 'مفاهيم الأمن العامة' },
        estimatedHours: 8,
        objectives: {
          en: ['Compare and contrast security concepts', 'CIA Triad (Confidentiality, Integrity, Availability)', 'Authentication, Authorization, and Accounting (AAA)', 'Gap analysis and zero trust architecture'],
          ar: ['مقارنة مفاهيم الأمن المختلفة', 'ثالوث CIA (السرية، النزاهة، التوفر)', 'المصادقة والتفويض والمحاسبة', 'تحليل الثغرات وبنية عدم الثقة']
        },
        resources: {
          videos: [
            { title: { en: 'Security+ SY0-701 - General Security Concepts', ar: 'مفاهيم الأمن العامة - SY0-701' }, url: 'https://www.youtube.com/watch?v=KiEptGbnEBc', duration: '1:02:00' },
            { title: { en: 'CIA Triad Explained', ar: 'شرح ثالوث CIA' }, url: 'https://www.youtube.com/watch?v=AJTJN4wDBM8', duration: '12:00' }
          ],
          pdfs: [
            { title: { en: 'CompTIA Security+ SY0-701 Objectives PDF', ar: 'أهداف امتحان سيكيوريتي+ SY0-701' }, url: 'https://www.comptia.org/training/resources/exam-objectives' },
            { title: { en: 'Security Concepts Study Notes', ar: 'ملاحظات دراسية لمفاهيم الأمن' }, url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' }
          ],
          practice: [
            { title: { en: 'ExamCompass Free Practice Questions', ar: 'أسئلة تدريبية مجانية' }, url: 'https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests' }
          ]
        }
      },
      {
        id: 'sec-ch2',
        title: { en: 'Threats, Vulnerabilities, and Mitigations', ar: 'التهديدات والثغرات والتخفيف' },
        estimatedHours: 10,
        objectives: {
          en: ['Threat actors and motivations', 'Common attack vectors', 'Vulnerability types and indicators', 'Mitigation techniques'],
          ar: ['الجهات المهددة ودوافعها', 'نواقل الهجوم الشائعة', 'أنواع الثغرات ومؤشراتها', 'تقنيات التخفيف']
        },
        resources: {
          videos: [
            { title: { en: 'Threats & Vulnerabilities - Professor Messer', ar: 'التهديدات والثغرات' }, url: 'https://www.youtube.com/watch?v=OfMeFbBwnsk', duration: '55:00' },
            { title: { en: 'Types of Malware Explained', ar: 'أنواع البرمجيات الخبيثة' }, url: 'https://www.youtube.com/watch?v=n8mbzU0X2nQ', duration: '18:00' }
          ],
          pdfs: [
            { title: { en: 'Threat Landscape Overview', ar: 'نظرة عامة على مشهد التهديدات' }, url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' }
          ],
          practice: [
            { title: { en: 'Threats & Attacks Practice Quiz', ar: 'اختبار تدريبي للتهديدات والهجمات' }, url: 'https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests' }
          ]
        }
      },
      {
        id: 'sec-ch3',
        title: { en: 'Security Architecture', ar: 'هندسة الأمن' },
        estimatedHours: 8,
        objectives: {
          en: ['Network security architecture', 'Cloud security considerations', 'Secure infrastructure design', 'Resilience and recovery'],
          ar: ['هندسة أمن الشبكات', 'اعتبارات أمن السحابة', 'تصميم البنية التحتية الآمنة', 'المرونة والاسترداد']
        },
        resources: {
          videos: [
            { title: { en: 'Security Architecture Overview', ar: 'نظرة عامة على هندسة الأمن' }, url: 'https://www.youtube.com/watch?v=f_Eg-bGSLEM', duration: '48:00' }
          ],
          pdfs: [
            { title: { en: 'Security Architecture Study Guide', ar: 'دليل دراسة هندسة الأمن' }, url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' }
          ],
          practice: [
            { title: { en: 'Architecture Practice Questions', ar: 'أسئلة تدريبية في الهندسة' }, url: 'https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests' }
          ]
        }
      },
      {
        id: 'sec-ch4',
        title: { en: 'Security Operations', ar: 'عمليات الأمن' },
        estimatedHours: 10,
        objectives: {
          en: ['Security monitoring and alerting', 'Incident response procedures', 'Digital forensics concepts', 'Log management and SIEM'],
          ar: ['مراقبة الأمن والتنبيه', 'إجراءات الاستجابة للحوادث', 'مفاهيم الطب الشرعي الرقمي', 'إدارة السجلات و SIEM']
        },
        resources: {
          videos: [
            { title: { en: 'Security Operations & Monitoring', ar: 'عمليات الأمن والمراقبة' }, url: 'https://www.youtube.com/watch?v=J_0S1i8lMNY', duration: '52:00' }
          ],
          pdfs: [
            { title: { en: 'Incident Response Checklist', ar: 'قائمة مراجعة الاستجابة للحوادث' }, url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' }
          ],
          practice: [
            { title: { en: 'SecOps Practice Test', ar: 'اختبار تدريبي لعمليات الأمن' }, url: 'https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests' }
          ]
        }
      },
      {
        id: 'sec-ch5',
        title: { en: 'Security Program Management', ar: 'إدارة برنامج الأمن' },
        estimatedHours: 7,
        objectives: {
          en: ['Security governance concepts', 'Risk management processes', 'Compliance and auditing', 'Security awareness training'],
          ar: ['مفاهيم حوكمة الأمن', 'عمليات إدارة المخاطر', 'الامتثال والتدقيق', 'تدريب الوعي الأمني']
        },
        resources: {
          videos: [
            { title: { en: 'Security Governance & Compliance', ar: 'حوكمة الأمن والامتثال' }, url: 'https://www.youtube.com/watch?v=4X7wHQm8kLk', duration: '45:00' }
          ],
          pdfs: [
            { title: { en: 'Risk Management Framework Guide', ar: 'دليل إطار إدارة المخاطر' }, url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' }
          ],
          practice: [
            { title: { en: 'Governance & Risk Practice Quiz', ar: 'اختبار تدريبي في الحوكمة والمخاطر' }, url: 'https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests' }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'Focus on understanding concepts, not memorizing terms',
        'Practice with performance-based questions (PBQs)',
        'The exam tests your ability to apply knowledge, not just recall it',
        'Skip PBQs first and come back to them — they take more time',
        'Use Professor Messer\'s free video course as your primary study resource',
        'Take at least 3 full practice exams before scheduling your real exam'
      ],
      ar: [
        'ركز على فهم المفاهيم وليس حفظ المصطلحات',
        'تدرب على الأسئلة المبنية على الأداء (PBQs)',
        'الامتحان يختبر قدرتك على تطبيق المعرفة وليس فقط تذكرها',
        'تجاوز أسئلة PBQ أولاً وعد إليها لاحقاً — تأخذ وقتاً أطول',
        'استخدم دورة Professor Messer المجانية كمورد دراسي أساسي',
        'أجرِ ٣ اختبارات تدريبية كاملة على الأقل قبل حجز الامتحان الحقيقي'
      ]
    }
  },
  {
    id: 'aws-cloud-practitioner',
    careerPath: 'cloud',
    name: { en: 'AWS Cloud Practitioner (CLF-C02)', ar: 'ممارس سحابة AWS (CLF-C02)' },
    shortName: { en: 'AWS CCP', ar: 'AWS CCP' },
    description: {
      en: 'The foundational AWS certification that validates your understanding of AWS Cloud concepts, services, security, and pricing. Perfect entry point into cloud computing careers.',
      ar: 'شهادة AWS التأسيسية التي تثبت فهمك لمفاهيم وخدمات وأمن وتسعير سحابة AWS. نقطة دخول مثالية لمهن الحوسبة السحابية.'
    },
    organization: 'Amazon Web Services',
    difficulty: 'beginner',
    estimatedWeeks: 6,
    examCost: '$100',
    passingScore: '700/1000',
    examDuration: '90 minutes',
    totalQuestions: '65 questions',
    officialExamUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    officialSiteUrl: 'https://aws.amazon.com',
    chapters: [
      {
        id: 'aws-ch1',
        title: { en: 'Cloud Concepts', ar: 'مفاهيم السحابة' },
        estimatedHours: 6,
        objectives: {
          en: ['Define the AWS Cloud and value proposition', 'Benefits of cloud computing', 'Cloud deployment models', 'AWS Well-Architected Framework'],
          ar: ['تعريف سحابة AWS وعرض القيمة', 'فوائد الحوسبة السحابية', 'نماذج نشر السحابة', 'إطار عمل AWS المصمم جيداً']
        },
        resources: {
          videos: [
            { title: { en: 'AWS Cloud Practitioner Full Course 2024', ar: 'دورة كاملة لممارس سحابة AWS' }, url: 'https://www.youtube.com/watch?v=SOTamWNgDKc', duration: '14:22:00' },
            { title: { en: 'Cloud Computing Explained', ar: 'شرح الحوسبة السحابية' }, url: 'https://www.youtube.com/watch?v=mxT233EdY5c', duration: '10:00' }
          ],
          pdfs: [
            { title: { en: 'AWS CCP Exam Guide', ar: 'دليل امتحان ممارس السحابة' }, url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/' },
            { title: { en: 'AWS Cloud Overview Whitepaper', ar: 'ورقة بيضاء - نظرة عامة على السحابة' }, url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html' }
          ],
          practice: [
            { title: { en: 'AWS Free Practice Exam', ar: 'اختبار تدريبي مجاني من AWS' }, url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set' }
          ]
        }
      },
      {
        id: 'aws-ch2',
        title: { en: 'Security and Compliance', ar: 'الأمن والامتثال' },
        estimatedHours: 7,
        objectives: {
          en: ['AWS shared responsibility model', 'IAM (Identity and Access Management)', 'Security services (GuardDuty, Inspector)', 'Encryption and compliance programs'],
          ar: ['نموذج المسؤولية المشتركة في AWS', 'إدارة الهوية والوصول (IAM)', 'خدمات الأمن', 'التشفير وبرامج الامتثال']
        },
        resources: {
          videos: [
            { title: { en: 'AWS Security & Compliance', ar: 'أمن وامتثال AWS' }, url: 'https://www.youtube.com/watch?v=Ia-UEYYR44s', duration: '45:00' }
          ],
          pdfs: [
            { title: { en: 'AWS Shared Responsibility Model', ar: 'نموذج المسؤولية المشتركة' }, url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' }
          ],
          practice: [
            { title: { en: 'Security Practice Questions', ar: 'أسئلة تدريبية في الأمن' }, url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set' }
          ]
        }
      },
      {
        id: 'aws-ch3',
        title: { en: 'Technology & Services', ar: 'التكنولوجيا والخدمات' },
        estimatedHours: 10,
        objectives: {
          en: ['Core AWS services (EC2, S3, RDS, Lambda)', 'Networking services (VPC, CloudFront, Route 53)', 'Database services', 'Compute and storage options'],
          ar: ['خدمات AWS الأساسية', 'خدمات الشبكات', 'خدمات قواعد البيانات', 'خيارات الحوسبة والتخزين']
        },
        resources: {
          videos: [
            { title: { en: 'AWS Core Services Deep Dive', ar: 'تعمق في خدمات AWS الأساسية' }, url: 'https://www.youtube.com/watch?v=JIbIYCM48to', duration: '1:20:00' }
          ],
          pdfs: [
            { title: { en: 'AWS Services Overview', ar: 'نظرة عامة على خدمات AWS' }, url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html' }
          ],
          practice: [
            { title: { en: 'Technology Practice Quiz', ar: 'اختبار تدريبي في التكنولوجيا' }, url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set' }
          ]
        }
      },
      {
        id: 'aws-ch4',
        title: { en: 'Billing and Pricing', ar: 'الفواتير والتسعير' },
        estimatedHours: 5,
        objectives: {
          en: ['AWS pricing models', 'AWS Free Tier', 'Cost management tools', 'Support plans and pricing'],
          ar: ['نماذج تسعير AWS', 'الطبقة المجانية في AWS', 'أدوات إدارة التكاليف', 'خطط الدعم والتسعير']
        },
        resources: {
          videos: [
            { title: { en: 'AWS Pricing & Billing Explained', ar: 'شرح تسعير وفواتير AWS' }, url: 'https://www.youtube.com/watch?v=lMELkbMyfGY', duration: '35:00' }
          ],
          pdfs: [
            { title: { en: 'AWS Pricing Overview', ar: 'نظرة عامة على تسعير AWS' }, url: 'https://aws.amazon.com/pricing/' }
          ],
          practice: [
            { title: { en: 'Billing Practice Questions', ar: 'أسئلة تدريبية في الفوترة' }, url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set' }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'This is the easiest AWS certification — great starting point',
        'Focus on understanding what each service DOES, not how to configure it',
        'Know the Shared Responsibility Model inside and out',
        'Understand the difference between IaaS, PaaS, and SaaS',
        'Use the free AWS Skill Builder practice questions',
        'The exam is concept-based, not hands-on'
      ],
      ar: [
        'هذه أسهل شهادة AWS — نقطة بداية ممتازة',
        'ركز على فهم ما تفعله كل خدمة، وليس كيفية تكوينها',
        'اعرف نموذج المسؤولية المشتركة جيداً',
        'افهم الفرق بين IaaS و PaaS و SaaS',
        'استخدم أسئلة التدريب المجانية من AWS Skill Builder',
        'الامتحان مبني على المفاهيم وليس عملي'
      ]
    }
  },
  {
    id: 'google-data-analytics',
    careerPath: 'data',
    name: { en: 'Google Data Analytics Certificate', ar: 'شهادة تحليل البيانات من جوجل' },
    shortName: { en: 'Google DA', ar: 'جوجل DA' },
    description: {
      en: 'Google\'s professional certificate program that prepares you for an entry-level data analytics role. Learn spreadsheets, SQL, R programming, Tableau, and data visualization.',
      ar: 'برنامج شهادة جوجل المهنية الذي يعدك لدور تحليل بيانات مبتدئ. تعلم جداول البيانات و SQL وبرمجة R و Tableau وتصور البيانات.'
    },
    organization: 'Google',
    difficulty: 'beginner',
    estimatedWeeks: 10,
    examCost: 'Free (with Coursera subscription)',
    passingScore: '80%',
    examDuration: 'Self-paced',
    totalQuestions: 'Portfolio project',
    officialExamUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    officialSiteUrl: 'https://grow.google/certificates/data-analytics/',
    chapters: [
      {
        id: 'gda-ch1',
        title: { en: 'Foundations: Data, Data, Everywhere', ar: 'الأساسيات: البيانات في كل مكان' },
        estimatedHours: 8,
        objectives: {
          en: ['Understanding data analytics', 'Data-driven decision making', 'Analytical thinking', 'The data analytics ecosystem'],
          ar: ['فهم تحليل البيانات', 'اتخاذ القرارات المبنية على البيانات', 'التفكير التحليلي', 'نظام تحليل البيانات']
        },
        resources: {
          videos: [
            { title: { en: 'Google Data Analytics Full Course', ar: 'دورة كاملة لتحليل البيانات من جوجل' }, url: 'https://www.youtube.com/watch?v=hxnISO7dz2s', duration: '5:30:00' },
            { title: { en: 'What is Data Analytics?', ar: 'ما هو تحليل البيانات؟' }, url: 'https://www.youtube.com/watch?v=yZvFH7B6gKI', duration: '15:00' }
          ],
          pdfs: [
            { title: { en: 'Data Analytics Foundations Guide', ar: 'دليل أساسيات تحليل البيانات' }, url: 'https://grow.google/certificates/data-analytics/' }
          ],
          practice: [
            { title: { en: 'Data Foundations Quiz', ar: 'اختبار أساسيات البيانات' }, url: 'https://www.coursera.org/professional-certificates/google-data-analytics' }
          ]
        }
      },
      {
        id: 'gda-ch2',
        title: { en: 'Ask Questions to Make Data-Driven Decisions', ar: 'اطرح الأسئلة لاتخاذ قرارات مبنية على البيانات' },
        estimatedHours: 6,
        objectives: {
          en: ['Effective questioning techniques', 'Data-driven decisions', 'Spreadsheet basics', 'Structured thinking'],
          ar: ['تقنيات الأسئلة الفعالة', 'القرارات المبنية على البيانات', 'أساسيات جداول البيانات', 'التفكير المنظم']
        },
        resources: {
          videos: [
            { title: { en: 'Asking the Right Questions in Data', ar: 'طرح الأسئلة الصحيحة في البيانات' }, url: 'https://www.youtube.com/watch?v=yZvFH7B6gKI', duration: '20:00' }
          ],
          pdfs: [
            { title: { en: 'SMART Questions Framework', ar: 'إطار الأسئلة الذكية' }, url: 'https://grow.google/certificates/data-analytics/' }
          ],
          practice: [
            { title: { en: 'Question Formulation Practice', ar: 'تدريب صياغة الأسئلة' }, url: 'https://www.coursera.org/professional-certificates/google-data-analytics' }
          ]
        }
      },
      {
        id: 'gda-ch3',
        title: { en: 'Prepare Data for Exploration', ar: 'تحضير البيانات للاستكشاف' },
        estimatedHours: 7,
        objectives: {
          en: ['Data types and structures', 'Data bias and credibility', 'Database essentials', 'Data organization'],
          ar: ['أنواع وهياكل البيانات', 'تحيز البيانات والمصداقية', 'أساسيات قواعد البيانات', 'تنظيم البيانات']
        },
        resources: {
          videos: [
            { title: { en: 'SQL for Data Analysis', ar: 'SQL لتحليل البيانات' }, url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY', duration: '4:20:00' }
          ],
          pdfs: [
            { title: { en: 'Data Preparation Best Practices', ar: 'أفضل ممارسات تحضير البيانات' }, url: 'https://grow.google/certificates/data-analytics/' }
          ],
          practice: [
            { title: { en: 'SQL Practice Exercises', ar: 'تمارين تدريبية في SQL' }, url: 'https://www.w3schools.com/sql/sql_exercises.asp' }
          ]
        }
      },
      {
        id: 'gda-ch4',
        title: { en: 'Process & Analyze Data', ar: 'معالجة وتحليل البيانات' },
        estimatedHours: 8,
        objectives: {
          en: ['Data cleaning techniques', 'SQL queries for analysis', 'Data verification', 'Spreadsheet functions and formulas'],
          ar: ['تقنيات تنظيف البيانات', 'استعلامات SQL للتحليل', 'التحقق من البيانات', 'دوال وصيغ جداول البيانات']
        },
        resources: {
          videos: [
            { title: { en: 'Data Cleaning with Spreadsheets', ar: 'تنظيف البيانات باستخدام جداول البيانات' }, url: 'https://www.youtube.com/watch?v=bJzb-RuUcMU', duration: '35:00' }
          ],
          pdfs: [
            { title: { en: 'Data Cleaning Checklist', ar: 'قائمة مراجعة تنظيف البيانات' }, url: 'https://grow.google/certificates/data-analytics/' }
          ],
          practice: []
        }
      },
      {
        id: 'gda-ch5',
        title: { en: 'Share & Act on Data (Visualization)', ar: 'مشاركة البيانات والعمل عليها (التصور)' },
        estimatedHours: 8,
        objectives: {
          en: ['Data visualization with Tableau', 'Presentation and storytelling', 'R programming basics', 'Building a portfolio project'],
          ar: ['تصور البيانات باستخدام Tableau', 'العرض وسرد القصص', 'أساسيات برمجة R', 'بناء مشروع ملف أعمال']
        },
        resources: {
          videos: [
            { title: { en: 'Tableau for Beginners', ar: 'Tableau للمبتدئين' }, url: 'https://www.youtube.com/watch?v=TPMlZxRRaBQ', duration: '1:30:00' }
          ],
          pdfs: [
            { title: { en: 'Data Visualization Best Practices', ar: 'أفضل ممارسات تصور البيانات' }, url: 'https://grow.google/certificates/data-analytics/' }
          ],
          practice: [
            { title: { en: 'Tableau Public Practice', ar: 'تدريب Tableau العام' }, url: 'https://public.tableau.com/' }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'This certificate is self-paced — take your time with each course',
        'Build a strong portfolio project at the end',
        'Practice SQL queries extensively — it\'s the most in-demand skill',
        'Learn Tableau by building visualizations with real datasets',
        'Join the Google Data Analytics community for support',
        'This cert is recognized by top employers like Deloitte, Walmart, and Google'
      ],
      ar: [
        'هذه الشهادة ذاتية الوتيرة — خذ وقتك مع كل دورة',
        'ابنِ مشروع ملف أعمال قوي في النهاية',
        'تدرب على استعلامات SQL بشكل مكثف — أكثر مهارة مطلوبة',
        'تعلم Tableau ببناء تصورات مع بيانات حقيقية',
        'انضم لمجتمع تحليل البيانات من جوجل للدعم',
        'هذه الشهادة معترف بها من أصحاب عمل كبار مثل ديلويت وولمارت وجوجل'
      ]
    }
  },
  {
    id: 'pmi-capm',
    careerPath: 'project',
    name: { en: 'CAPM - Certified Associate in Project Management', ar: 'CAPM - مساعد معتمد في إدارة المشاريع' },
    shortName: { en: 'CAPM', ar: 'CAPM' },
    description: {
      en: 'PMI\'s entry-level project management certification. Demonstrates your understanding of project management processes, terminology, and best practices based on the PMBOK Guide.',
      ar: 'شهادة إدارة المشاريع المبتدئة من PMI. تثبت فهمك لعمليات ومصطلحات وأفضل ممارسات إدارة المشاريع بناءً على دليل PMBOK.'
    },
    organization: 'PMI',
    difficulty: 'intermediate',
    estimatedWeeks: 8,
    examCost: '$300 (PMI member) / $400 (non-member)',
    passingScore: 'Above Target',
    examDuration: '180 minutes',
    totalQuestions: '150 questions',
    officialExamUrl: 'https://www.pmi.org/certifications/certified-associate-capm',
    officialSiteUrl: 'https://www.pmi.org',
    chapters: [
      {
        id: 'capm-ch1',
        title: { en: 'Project Management Fundamentals', ar: 'أساسيات إدارة المشاريع' },
        estimatedHours: 8,
        objectives: {
          en: ['Project life cycle phases', 'Project vs. operations', 'Stakeholder identification', 'Project management processes'],
          ar: ['مراحل دورة حياة المشروع', 'المشروع مقابل العمليات', 'تحديد أصحاب المصلحة', 'عمليات إدارة المشاريع']
        },
        resources: {
          videos: [
            { title: { en: 'CAPM Full Course - Project Management', ar: 'دورة كاملة CAPM - إدارة المشاريع' }, url: 'https://www.youtube.com/watch?v=i69U0lvi89c', duration: '3:45:00' },
            { title: { en: 'Project Management Basics', ar: 'أساسيات إدارة المشاريع' }, url: 'https://www.youtube.com/watch?v=rBSCvPYGnTc', duration: '25:00' }
          ],
          pdfs: [
            { title: { en: 'CAPM Exam Content Outline', ar: 'مخطط محتوى امتحان CAPM' }, url: 'https://www.pmi.org/certifications/certified-associate-capm' }
          ],
          practice: [
            { title: { en: 'Free CAPM Practice Questions', ar: 'أسئلة تدريبية مجانية CAPM' }, url: 'https://www.pmtraining.com/free-capm-practice-exam' }
          ]
        }
      },
      {
        id: 'capm-ch2',
        title: { en: 'Predictive (Waterfall) Approaches', ar: 'المنهجيات التنبؤية (الشلال)' },
        estimatedHours: 10,
        objectives: {
          en: ['Scope management', 'Schedule management', 'Cost management', 'Quality management', 'Risk management'],
          ar: ['إدارة النطاق', 'إدارة الجدول الزمني', 'إدارة التكاليف', 'إدارة الجودة', 'إدارة المخاطر']
        },
        resources: {
          videos: [
            { title: { en: 'Waterfall Project Management Explained', ar: 'شرح إدارة المشاريع بمنهجية الشلال' }, url: 'https://www.youtube.com/watch?v=cJFqMVim4VE', duration: '18:00' }
          ],
          pdfs: [
            { title: { en: 'PMBOK Guide Summary', ar: 'ملخص دليل PMBOK' }, url: 'https://www.pmi.org/pmbok-guide-standards/foundational/PMBOK' }
          ],
          practice: [
            { title: { en: 'Predictive Methodology Quiz', ar: 'اختبار المنهجية التنبؤية' }, url: 'https://www.pmtraining.com/free-capm-practice-exam' }
          ]
        }
      },
      {
        id: 'capm-ch3',
        title: { en: 'Agile Frameworks', ar: 'أطر العمل الرشيقة' },
        estimatedHours: 8,
        objectives: {
          en: ['Agile principles and values', 'Scrum framework', 'Kanban methodology', 'Agile vs Waterfall comparison'],
          ar: ['مبادئ وقيم الأجايل', 'إطار عمل سكرم', 'منهجية كانبان', 'مقارنة الأجايل والشلال']
        },
        resources: {
          videos: [
            { title: { en: 'Agile Project Management Course', ar: 'دورة إدارة المشاريع الرشيقة' }, url: 'https://www.youtube.com/watch?v=5DkHHfRYDWA', duration: '45:00' }
          ],
          pdfs: [
            { title: { en: 'Agile Practice Guide', ar: 'دليل الممارسة الرشيقة' }, url: 'https://www.pmi.org/pmbok-guide-standards/practice-guides/agile' }
          ],
          practice: [
            { title: { en: 'Agile Practice Questions', ar: 'أسئلة تدريبية في الأجايل' }, url: 'https://www.pmtraining.com/free-capm-practice-exam' }
          ]
        }
      },
      {
        id: 'capm-ch4',
        title: { en: 'Business Analysis & Integration', ar: 'تحليل الأعمال والتكامل' },
        estimatedHours: 6,
        objectives: {
          en: ['Business case development', 'Benefits management', 'Project selection methods', 'Integration management'],
          ar: ['تطوير دراسة الجدوى', 'إدارة المنافع', 'طرق اختيار المشاريع', 'إدارة التكامل']
        },
        resources: {
          videos: [
            { title: { en: 'Business Analysis Fundamentals', ar: 'أساسيات تحليل الأعمال' }, url: 'https://www.youtube.com/watch?v=E1v2FxJRv-0', duration: '30:00' }
          ],
          pdfs: [
            { title: { en: 'Business Analysis Guide', ar: 'دليل تحليل الأعمال' }, url: 'https://www.pmi.org/certifications/certified-associate-capm' }
          ],
          practice: [
            { title: { en: 'Integration Management Quiz', ar: 'اختبار إدارة التكامل' }, url: 'https://www.pmtraining.com/free-capm-practice-exam' }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'Study the PMBOK Guide 7th Edition thoroughly',
        'About 50% of the exam is predictive, 50% is agile',
        'Understand the terminology — PMI uses specific language',
        'Take the 23 hours of project management education (required)',
        'PMI membership saves you $100 on the exam fee',
        'Practice with scenario-based questions, not just definitions'
      ],
      ar: [
        'ادرس دليل PMBOK الطبعة السابعة جيداً',
        'حوالي ٥٠٪ من الامتحان تنبؤي و ٥٠٪ رشيق',
        'افهم المصطلحات — PMI يستخدم لغة محددة',
        'أكمل ٢٣ ساعة من تعليم إدارة المشاريع (مطلوب)',
        'عضوية PMI توفر لك ١٠٠ دولار من رسوم الامتحان',
        'تدرب على أسئلة السيناريوهات وليس فقط التعريفات'
      ]
    }
  },
  {
    id: 'cisco-ccna',
    careerPath: 'networking',
    name: { en: 'Cisco CCNA (200-301)', ar: 'سيسكو CCNA (200-301)' },
    shortName: { en: 'CCNA', ar: 'CCNA' },
    description: {
      en: 'The gold standard networking certification. Validates your ability to install, configure, and troubleshoot enterprise networks. Essential for network engineering careers.',
      ar: 'المعيار الذهبي لشهادات الشبكات. يثبت قدرتك على تثبيت وتكوين واستكشاف أخطاء شبكات المؤسسات. أساسي لمهن هندسة الشبكات.'
    },
    organization: 'Cisco',
    difficulty: 'intermediate',
    estimatedWeeks: 14,
    examCost: '$330',
    passingScore: '825/1000',
    examDuration: '120 minutes',
    totalQuestions: '100-120 questions',
    officialExamUrl: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html',
    officialSiteUrl: 'https://www.cisco.com',
    chapters: [
      {
        id: 'ccna-ch1',
        title: { en: 'Network Fundamentals', ar: 'أساسيات الشبكات' },
        estimatedHours: 12,
        objectives: {
          en: ['OSI and TCP/IP models', 'IPv4 and IPv6 addressing', 'Subnetting', 'Network topologies and types'],
          ar: ['نماذج OSI و TCP/IP', 'عنونة IPv4 و IPv6', 'التقسيم الفرعي', 'طوبولوجيا وأنواع الشبكات']
        },
        resources: {
          videos: [
            { title: { en: 'CCNA Full Course - Network Fundamentals', ar: 'دورة CCNA كاملة - أساسيات الشبكات' }, url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo', duration: '8:10:00' },
            { title: { en: 'Subnetting Made Easy', ar: 'التقسيم الفرعي بسهولة' }, url: 'https://www.youtube.com/watch?v=ecCuyq-Wprc', duration: '35:00' }
          ],
          pdfs: [
            { title: { en: 'CCNA 200-301 Exam Topics', ar: 'مواضيع امتحان CCNA 200-301' }, url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' },
            { title: { en: 'Subnetting Cheat Sheet', ar: 'ورقة غش التقسيم الفرعي' }, url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' }
          ],
          practice: [
            { title: { en: 'Subnetting Practice', ar: 'تدريب التقسيم الفرعي' }, url: 'https://subnettingpractice.com/' }
          ]
        }
      },
      {
        id: 'ccna-ch2',
        title: { en: 'Network Access (Switching)', ar: 'الوصول للشبكة (التبديل)' },
        estimatedHours: 10,
        objectives: {
          en: ['VLANs and trunking', 'EtherChannel', 'Spanning Tree Protocol (STP)', 'Switch configuration and security'],
          ar: ['شبكات VLAN والتجذير', 'EtherChannel', 'بروتوكول الشجرة الممتدة', 'تكوين وأمن المبدل']
        },
        resources: {
          videos: [
            { title: { en: 'VLANs and Trunking Explained', ar: 'شرح VLANs والتجذير' }, url: 'https://www.youtube.com/watch?v=A9lMH0ye1HU', duration: '40:00' }
          ],
          pdfs: [
            { title: { en: 'Switching Study Notes', ar: 'ملاحظات دراسة التبديل' }, url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' }
          ],
          practice: [
            { title: { en: 'Switching Lab Exercises', ar: 'تمارين مختبر التبديل' }, url: 'https://www.netacad.com/' }
          ]
        }
      },
      {
        id: 'ccna-ch3',
        title: { en: 'IP Connectivity (Routing)', ar: 'اتصال IP (التوجيه)' },
        estimatedHours: 12,
        objectives: {
          en: ['Static and dynamic routing', 'OSPF configuration', 'First Hop Redundancy Protocols', 'Router configuration'],
          ar: ['التوجيه الثابت والديناميكي', 'تكوين OSPF', 'بروتوكولات التكرار للقفزة الأولى', 'تكوين الموجه']
        },
        resources: {
          videos: [
            { title: { en: 'OSPF Routing Protocol Deep Dive', ar: 'تعمق في بروتوكول التوجيه OSPF' }, url: 'https://www.youtube.com/watch?v=kfvJ8QVJscc', duration: '55:00' }
          ],
          pdfs: [
            { title: { en: 'Routing Protocols Comparison', ar: 'مقارنة بروتوكولات التوجيه' }, url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' }
          ],
          practice: [
            { title: { en: 'Routing Practice Labs', ar: 'مختبرات تدريب التوجيه' }, url: 'https://www.netacad.com/' }
          ]
        }
      },
      {
        id: 'ccna-ch4',
        title: { en: 'IP Services & Security', ar: 'خدمات وأمن IP' },
        estimatedHours: 8,
        objectives: {
          en: ['NAT and PAT', 'DHCP and DNS', 'Network security fundamentals', 'ACLs (Access Control Lists)', 'Wireless security'],
          ar: ['NAT و PAT', 'DHCP و DNS', 'أساسيات أمن الشبكات', 'قوائم التحكم بالوصول', 'أمن الشبكات اللاسلكية']
        },
        resources: {
          videos: [
            { title: { en: 'NAT Configuration Tutorial', ar: 'درس تكوين NAT' }, url: 'https://www.youtube.com/watch?v=FTUV0t6JaDA', duration: '30:00' }
          ],
          pdfs: [
            { title: { en: 'ACL Configuration Guide', ar: 'دليل تكوين قوائم التحكم' }, url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' }
          ],
          practice: [
            { title: { en: 'Security & Services Practice', ar: 'تدريب الأمن والخدمات' }, url: 'https://www.netacad.com/' }
          ]
        }
      },
      {
        id: 'ccna-ch5',
        title: { en: 'Automation & Programmability', ar: 'الأتمتة وقابلية البرمجة' },
        estimatedHours: 6,
        objectives: {
          en: ['Network automation concepts', 'REST APIs', 'Configuration management tools', 'JSON and data formats'],
          ar: ['مفاهيم أتمتة الشبكات', 'واجهات REST API', 'أدوات إدارة التكوين', 'JSON وتنسيقات البيانات']
        },
        resources: {
          videos: [
            { title: { en: 'Network Automation for CCNA', ar: 'أتمتة الشبكات لامتحان CCNA' }, url: 'https://www.youtube.com/watch?v=aTTRBagfEdU', duration: '40:00' }
          ],
          pdfs: [
            { title: { en: 'Network Automation Overview', ar: 'نظرة عامة على أتمتة الشبكات' }, url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html' }
          ],
          practice: [
            { title: { en: 'API Practice Exercises', ar: 'تمارين تدريبية على API' }, url: 'https://developer.cisco.com/learning/' }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'Subnetting speed is critical — practice until it\'s second nature',
        'Use Packet Tracer or GNS3 for hands-on lab practice',
        'This is the hardest cert on our list — give yourself 3-4 months',
        'Focus heavily on OSPF — it\'s the most tested routing protocol',
        'Understand the OSI model layers and what happens at each',
        'Jeremy\'s IT Lab on YouTube is an excellent free resource'
      ],
      ar: [
        'سرعة التقسيم الفرعي حاسمة — تدرب حتى يصبح طبيعياً',
        'استخدم Packet Tracer أو GNS3 للتدريب العملي',
        'هذه أصعب شهادة في قائمتنا — أعطِ نفسك ٣-٤ أشهر',
        'ركز بشدة على OSPF — أكثر بروتوكول توجيه مُختبر',
        'افهم طبقات نموذج OSI وما يحدث في كل طبقة',
        'Jeremy IT Lab على يوتيوب مورد مجاني ممتاز'
      ]
    }
  }
];
