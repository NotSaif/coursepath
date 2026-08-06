export const certifications = [
  {
    id: 'comptia-security-plus',
    careerPath: 'cybersecurity',
    name: { en: 'CompTIA Security+ (SY0-701)', ar: 'كومبتيا سيكيوريتي+ (SY0-701)' },
    shortName: { en: 'Security+', ar: 'سيكيوريتي+' },
    description: {
      en: 'The gold-standard baseline cybersecurity certification required by employers and governments worldwide. Covers core security concepts, threats, architecture, operations, and governance.',
      ar: 'أكثر شهادة معتمدة للتحقق من مهارات الأمن السيبراني الأساسية. مطلوبة من الحكومات وأصحاب العمل عالمياً لتغطية مفاهيم الأمن، التهديدات، الهندسة، والعمليات.'
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
        title: { en: 'Domain 1.0: General Security Concepts', ar: 'المجال ١.٠: مفاهيم الأمن العامة' },
        estimatedHours: 8,
        objectives: {
          en: [
            'Compare and contrast key security concepts (CIA Triad: Confidentiality, Integrity, Availability)',
            'Authentication, Authorization, and Accounting (AAA)',
            'Zero Trust Architecture principles and Gap Analysis',
            'Cryptographic concepts (Symmetric vs Asymmetric, Hashing, PKI)'
          ],
          ar: [
            'مقارنة مفاهيم الأمن الأساسية (ثالوث CIA: السرية، النزاهة، التوفر)',
            'المصادقة والتفويض والمحاسبة (AAA)',
            'مبادئ بنية عدم الثقة (Zero Trust) وتحليل الفجوات',
            'مفاهيم التشفير (التماثلي، غير التماثلي، التجزئة، PKI)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: CompTIA Security+ SY0-701 Full Course (8 Hours)', ar: 'فري كود كامب: دورة سيكيوريتي+ الشاملة (٨ ساعات)' },
              url: 'https://www.youtube.com/watch?v=9neVf7VlD2s',
              embedId: '9neVf7VlD2s',
              duration: '8:12:00'
            },
            {
              title: { en: 'Professor Messer: General Security Concepts & CIA Triad', ar: 'بروفيسور ميسر: مفاهيم الأمن العامة وثالوث CIA' },
              url: 'https://www.youtube.com/watch?v=KiEptGbnEBc',
              embedId: 'KiEptGbnEBc',
              duration: '18:40'
            }
          ],
          pdfs: [
            {
              title: { en: 'CompTIA Security+ SY0-701 Official Exam Objectives (PDF)', ar: 'أهداف امتحان سيكيوريتي+ الرسمية (PDF)' },
              url: 'https://www.comptia.org/training/resources/exam-objectives'
            },
            {
              title: { en: 'Professor Messer Free SY0-701 Study Notes Overview', ar: 'ملخص ملاحظات دراسة بروفيسور ميسر المجانية' },
              url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/'
            }
          ],
          practice: [
            {
              title: { en: 'ExamCompass Security+ Domain 1 Free Practice Tests', ar: 'اختبارات تدريبية مجانية للمجال الأول من ExamCompass' },
              url: 'https://www.examcompass.com/comptia/security-plus-certification/free-security-plus-practice-tests'
            }
          ]
        }
      },
      {
        id: 'sec-ch2',
        title: { en: 'Domain 2.0: Threats, Vulnerabilities, and Mitigations', ar: 'المجال ٢.٠: التهديدات والثغرات وطرق التخفيف' },
        estimatedHours: 10,
        objectives: {
          en: [
            'Analyze common threat actors, motivations, and attack vectors (Phishing, Social Engineering)',
            'Identify types of malware (Ransomware, Trojans, Rootkits, Keyloggers)',
            'Understand vulnerability indicators (Zero-day, Misconfigurations, Unpatched systems)',
            'Apply mitigation techniques (Patching, Hardening, Input Validation)'
          ],
          ar: [
            'تحليل الجهات المهددة، الدوافع، ونواقل الهجوم (التصيد، الهندسة الاجتماعية)',
            'التعرف على أنواع البرمجيات الخبيثة (فدية، طروادة، روكيت، مسجلات مفاتيح)',
            'فهم مؤشرات الثغرات (اليوم الصفر، التكوينات الخاطئة، الأنظمة غير المحدثة)',
            'تطبيق تقنيات التخفيف (التحديثات، التقوية، التحقق من المدخلات)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: Threats, Malware & Social Engineering Deep Dive', ar: 'فري كود كامب: التهديدات والهندسة الاجتماعية والبرمجيات الخبيثة' },
              url: 'https://www.youtube.com/watch?v=9neVf7VlD2s',
              embedId: '9neVf7VlD2s',
              duration: '2:15:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'CISA Threat & Vulnerability Management Guide', ar: 'دليل إدارة التهديدات والثغرات من CISA' },
              url: 'https://www.cisa.gov/resources-tools/all-resources'
            }
          ],
          practice: [
            {
              title: { en: 'ExamCompass Threats & Vulnerabilities Quiz', ar: 'اختبار تدريبي للتهديدات والثغرات' },
              url: 'https://www.examcompass.com/comptia-security-plus-practice-test-1-exam-sy0-701'
            }
          ]
        }
      },
      {
        id: 'sec-ch3',
        title: { en: 'Domain 3.0: Security Architecture', ar: 'المجال ٣.٠: هندسة وبنية الأمن' },
        estimatedHours: 8,
        objectives: {
          en: [
            'Design secure network architectures (DMZ, Segmentation, Firewalls, VPNs)',
            'Cloud security considerations (IaaS, PaaS, SaaS, CASB)',
            'Resilience and business continuity strategies (HA, Redundancy, Backups)',
            'Secure application deployment and hardware security (TPM, HSM)'
          ],
          ar: [
            'تصميم بنية شبكات آمنة (DMZ، التجزئة، الجدران النارية، VPN)',
            'اعتبارات أمن السحابة (IaaS, PaaS, SaaS, CASB)',
            'استراتيجيات المرونة واستمرارية الأعمال (التوفر العالي، النسخ الاحتياطي)',
            'نشر التطبيقات الآمن وأمن الأجهزة (TPM, HSM)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: Security Architecture & Cloud Security', ar: 'فري كود كامب: هندسة الأمن وأمن السحابة' },
              url: 'https://www.youtube.com/watch?v=9neVf7VlD2s',
              embedId: '9neVf7VlD2s',
              duration: '1:45:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'NIST Cyber Security Framework Architecture Overview', ar: 'نظرة عامة على إطار الأمان السيبراني NIST' },
              url: 'https://www.nist.gov/cyberframework'
            }
          ],
          practice: [
            {
              title: { en: 'ExamCompass Security Architecture Practice Questions', ar: 'أسئلة تدريبية في هندسة الأمن' },
              url: 'https://www.examcompass.com/comptia-security-plus-practice-test-2-exam-sy0-701'
            }
          ]
        }
      },
      {
        id: 'sec-ch4',
        title: { en: 'Domain 4.0: Security Operations', ar: 'المجال ٤.٠: عمليات الأمن وإدارة الحوادث' },
        estimatedHours: 10,
        objectives: {
          en: [
            'Security monitoring tools and SIEM log analysis',
            'Incident response process (Preparation, Detection, Analysis, Containment, Eradication, Recovery)',
            'Digital forensics concepts (Chain of Custody, Memory vs Disk Analysis)',
            'Identity and access controls deployment'
          ],
          ar: [
            'أدوات المراقبة الأمنية وتحليل سجلات SIEM',
            'عملية الاستجابة للحوادث (التحضير، الكشف، التحليل، الاحتواء، الإزالة، الاسترداد)',
            'مفاهيم الطب الشرعي الرقمي (سلسلة الحضانة، تحليل الذاكرة مقابل القرص)',
            'نشر أدوات إدارة الهوية والوصول'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: Security Operations, SIEM & Incident Response', ar: 'فري كود كامب: عمليات الأمن والاستجابة للحوادث' },
              url: 'https://www.youtube.com/watch?v=9neVf7VlD2s',
              embedId: '9neVf7VlD2s',
              duration: '1:30:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'NIST SP 800-61 Computer Security Incident Handling Guide', ar: 'دليل معالجة حوادث الأمان الرقمي NIST SP 800-61' },
              url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final'
            }
          ],
          practice: [
            {
              title: { en: 'Security Operations & Incident Response Quiz', ar: 'اختبار عمليات الأمن والاستجابة للحوادث' },
              url: 'https://www.examcompass.com/comptia-security-plus-practice-test-3-exam-sy0-701'
            }
          ]
        }
      },
      {
        id: 'sec-ch5',
        title: { en: 'Domain 5.0: Security Program Management & Oversight', ar: 'المجال ٥.٠: إدارة وتوجيه برنامج الأمن' },
        estimatedHours: 7,
        objectives: {
          en: [
            'Security governance policies (SLA, MSA, NDA, AUP)',
            'Risk management processes (Risk Assessment, Risk Register, Risk Transfer)',
            'Compliance, auditing, and privacy standards (GDPR, HIPAA, PCI-DSS)',
            'Third-party vendor risk management'
          ],
          ar: [
            'سياسات حوكمة الأمن (SLA, MSA, NDA, AUP)',
            'عمليات إدارة المخاطر (تقييم المخاطر، سجل المخاطر، نقل المخاطر)',
            'معايير الامتثال والتدقيق والخصوصية (GDPR, HIPAA, PCI-DSS)',
            'إدارة مخاطر الموردين والأطراف الخارجية'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: Security Program Management & Governance', ar: 'فري كود كامب: إدارة برنامج الأمن والحوكمة' },
              url: 'https://www.youtube.com/watch?v=9neVf7VlD2s',
              embedId: '9neVf7VlD2s',
              duration: '1:10:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'CompTIA Security+ Quick Reference Summary', ar: 'ملخص مرجعي سريع لامتحان سيكيوريتي+' },
              url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/'
            }
          ],
          practice: [
            {
              title: { en: 'ExamCompass Final Security+ Practice Exam', ar: 'الاختبار التدريبي النهائي من ExamCompass' },
              url: 'https://www.examcompass.com/comptia-security-plus-practice-test-4-exam-sy0-701'
            }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'Use the built-in video player on CoursePath to study each chapter directly',
        'Focus heavily on understanding concepts instead of blind memorization',
        'Practice with Performance-Based Questions (PBQs) — skip them during the exam and solve them at the end',
        'Take at least 3 full-length practice exams on ExamCompass before booking your official exam',
        'Know key port numbers (SSH 22, HTTPS 443, DNS 53, RDP 3389) by heart'
      ],
      ar: [
        'استخدم مشغل الفيديوهات المدمج في CoursePath للدراسة مباشرة',
        'ركز بشدة على فهم المفاهيم بدلاً من الحفظ المجرد',
        'تدرب على أسئلة الأداء العملي (PBQs) — تخطّها أثناء الامتحان وحلها في النهاية',
        'أجرِ ٣ اختبارات تجريبية كاملة على ExamCompass قبل حجز موعد الامتحان',
        'احفظ المنافذ الرئيسية (SSH 22, HTTPS 443, DNS 53, RDP 3389) عن ظهر قلب'
      ]
    }
  },
  {
    id: 'aws-cloud-practitioner',
    careerPath: 'cloud',
    name: { en: 'AWS Certified Cloud Practitioner (CLF-C02)', ar: 'ممارس سحابة AWS المعتمد (CLF-C02)' },
    shortName: { en: 'AWS CCP', ar: 'AWS CCP' },
    description: {
      en: 'The essential starting certification for cloud computing. Validates overall understanding of AWS Cloud platform, global infrastructure, core services, security, and billing.',
      ar: 'الشهادة التأسيسية الأساسية للحوسبة السحابية. تثبت فهمك لمنصة AWS السحابية، البنية التحتية العالمية، الخدمات الأساسية، الأمان، والتسعير.'
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
        title: { en: 'Domain 1: Cloud Concepts & Architecture', ar: 'المجال ١: مفاهيم وبنية السحابة' },
        estimatedHours: 6,
        objectives: {
          en: [
            'Define the AWS Cloud value proposition and economic benefits',
            'Understand AWS Global Infrastructure (Regions, Availability Zones, Edge Locations)',
            'AWS Well-Architected Framework 6 Pillars (Operational Excellence, Security, Reliability, Performance, Cost, Sustainability)',
            'Cloud Migration Framework and Cloud Adoption Strategy'
          ],
          ar: [
            'تعريف عرض قيمة سحابة AWS والفوائد الاقتصادية',
            'فهم البنية التحتية العالمية لـ AWS (المناطق، مناطق التوفر، مواقع الحافة)',
            'الركائز الستة لإطار عمل AWS المصمم جيداً (التشغيل، الأمان، الاعتمادية، الأداء، التكلفة، الاستدامة)',
            'إطار عمل هجرة السحابة واستراتيجية التبني'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp / Andrew Brown: AWS Cloud Practitioner CLF-C02 Full Course', ar: 'دورة فري كود كامب / أندرو براون الشاملة لممارس سحابة AWS' },
              url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
              embedId: 'SOTamWNgDKc',
              duration: '14:22:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'AWS Cloud Practitioner Official CLF-C02 Exam Guide (PDF)', ar: 'دليل امتحان ممارس سحابة AWS الرسمي (PDF)' },
              url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
            },
            {
              title: { en: 'AWS Overview Whitepaper', ar: 'الورقة البيضاء - نظرة عامة على خدمات AWS' },
              url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html'
            }
          ],
          practice: [
            {
              title: { en: 'AWS Official Skill Builder Free Practice Questions Set', ar: 'مجموعة أسئلة تدريبية رسمية مجانية من AWS Skill Builder' },
              url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set'
            }
          ]
        }
      },
      {
        id: 'aws-ch2',
        title: { en: 'Domain 2: Cloud Security and Compliance', ar: 'المجال ٢: أمن وامتثال السحابة' },
        estimatedHours: 7,
        objectives: {
          en: [
            'AWS Shared Responsibility Model (AWS responsibility vs Customer responsibility)',
            'Identity and Access Management (IAM users, groups, roles, policies, MFA)',
            'AWS Security Services (KMS, Shield, WAF, GuardDuty, Inspector, Secrets Manager)',
            'Compliance artifacts and reports (AWS Artifact)'
          ],
          ar: [
            'نموذج المسؤولية المشتركة في AWS (مسؤولية AWS مقابل مسؤولية العميل)',
            'إدارة الهوية والوصول IAM (المستخدمين، المجموعات، الأدوار، السياسات، MFA)',
            'خدمات الأمن في AWS (KMS, Shield, WAF, GuardDuty, Inspector, Secrets Manager)',
            'تقارير وثائق الامتثال (AWS Artifact)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: AWS IAM & Security Deep Dive', ar: 'فري كود كامب: إدارة الهوية والوصول وأمن AWS' },
              url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
              embedId: 'SOTamWNgDKc',
              duration: '2:40:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'AWS Shared Responsibility Model Whitepaper', ar: 'ورقة عمل نموذج المسؤولية المشتركة في AWS' },
              url: 'https://aws.amazon.com/compliance/shared-responsibility-model/'
            }
          ],
          practice: [
            {
              title: { en: 'AWS Security Domain Practice Quiz', ar: 'اختبار تدريبي لمجال الأمن في AWS' },
              url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set'
            }
          ]
        }
      },
      {
        id: 'aws-ch3',
        title: { en: 'Domain 3: AWS Core Technology & Services', ar: 'المجال ٣: خدمات وتكنولوجيا AWS الأساسية' },
        estimatedHours: 10,
        objectives: {
          en: ['Compute Services (EC2, ECS, EKS, Lambda, Elastic Beanstalk)', 'Storage Services (S3, EBS, EFS, Glacier, AWS Storage Gateway)', 'Database Services (RDS, DynamoDB, ElastiCache, Redshift)', 'Networking & Content Delivery (VPC, Route 53, CloudFront, Direct Connect)'],
          ar: ['خدمات الحوسبة (EC2, ECS, EKS, Lambda, Elastic Beanstalk)', 'خدمات التخزين (S3, EBS, EFS, Glacier, Storage Gateway)', 'خدمات قواعد البيانات (RDS, DynamoDB, ElastiCache, Redshift)', 'شبكات وتوصيل المحتوى (VPC, Route 53, CloudFront, Direct Connect)']
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: AWS Compute, Storage & Database Services', ar: 'فري كود كامب: خدمات الحوسبة والتخزين وقواعد البيانات في AWS' },
              url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
              embedId: 'SOTamWNgDKc',
              duration: '4:15:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'AWS Core Services Reference Architecture Guide', ar: 'دليل البنية المرجعية لخدمات AWS الأساسية' },
              url: 'https://aws.amazon.com/architecture/'
            }
          ],
          practice: [
            {
              title: { en: 'AWS Services Practice Questions', ar: 'أسئلة تدريبية لخدمات AWS' },
              url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set'
            }
          ]
        }
      },
      {
        id: 'aws-ch4',
        title: { en: 'Domain 4: Billing, Pricing, and Support', ar: 'المجال ٤: الفواتير والتسعير والدعم' },
        estimatedHours: 5,
        objectives: {
          en: [
            'AWS Pricing Models (On-Demand, Reserved Instances, Savings Plans, Spot)',
            'AWS Free Tier types (Always Free, 12-Months Free, Trials)',
            'Cost Management tools (AWS Budgets, Cost Explorer, AWS Pricing Calculator)',
            'AWS Support Plans (Basic, Developer, Business, Enterprise)'
          ],
          ar: [
            'نماذج تسعير AWS (حسب الطلب، المحجوزة، خطط التوفير، الخاطفة)',
            'أنواع الطبقة المجانية في AWS (مجاني دائماً، ١٢ شهر مجاناً، تجريبي)',
            'أدوات إدارة التكلفة (الميزانيات، مستكشف التكلفة، حاسبة التسعير)',
            'خطط دعم AWS (أساسي، مطور، أعمال، مؤسسي)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: AWS Billing, Budgets & Cost Management', ar: 'فري كود كامب: الفواتير والميزانيات وإدارة التكاليف في AWS' },
              url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
              embedId: 'SOTamWNgDKc',
              duration: '1:20:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'AWS Pricing & Support Plans Summary', ar: 'ملخص تسعير وخطط دعم AWS' },
              url: 'https://aws.amazon.com/pricing/'
            }
          ],
          practice: [
            {
              title: { en: 'AWS Billing Domain Final Practice Quiz', ar: 'اختبار تدريبي في مجال الفواتير والتسعير' },
              url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/14050/aws-certified-cloud-practitioner-official-practice-question-set'
            }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'The Cloud Practitioner exam is conceptual — you do not need hands-on coding experience',
        'Memorize what each service DOES rather than exact technical configuration commands',
        'Master the Shared Responsibility Model (AWS is responsible FOR security OF the cloud, customer is responsible FOR security IN the cloud)',
        'Understand Support Plans differences (Enterprise offers a Technical Account Manager TAM and 15 min response time)'
      ],
      ar: [
        'امتحان ممارس السحابة مبني على المفاهيم — لا تحتاج خبرة برمجة عملية',
        'احفظ وظيفة كل خدمة وما تقوم به بدلاً من الأوامر التقنية التفصيلية',
        'أتقن نموذج المسؤولية المشتركة (AWS مسؤولة عن أمان السحابة، والعميل مسؤول عن الأمان داخل السحابة)',
        'افهم فروق خطط الدعم (الخطة المؤسسية توفر مدير حسابات تقني TAM واستجابة خلال ١٥ دقيقة)'
      ]
    }
  },
  {
    id: 'google-data-analytics',
    careerPath: 'data',
    name: { en: 'Google Data Analytics Professional Certificate', ar: 'شهادة تحليل البيانات الاحترافية من جوجل' },
    shortName: { en: 'Google DA', ar: 'جوجل DA' },
    description: {
      en: 'Google\'s career certificate program designed to prepare beginners for data analyst jobs. Master Spreadsheets, SQL, R Programming, Tableau data visualization, and Data-Driven Storytelling.',
      ar: 'برنامج شهادة جوجل المهنية لإعداد المبتدئين لوظائف محققي ومحللي البيانات. أتقن جداول البيانات، SQL، برمجة R، تصور البيانات بـ Tableau، وسرد قصص البيانات.'
    },
    organization: 'Google',
    difficulty: 'beginner',
    estimatedWeeks: 10,
    examCost: 'Free / Included in Coursera Plan',
    passingScore: '80%',
    examDuration: 'Self-Paced',
    totalQuestions: 'Hands-on Projects & Capstone',
    officialExamUrl: 'https://www.coursera.org/professional-certificates/google-data-analytics',
    officialSiteUrl: 'https://grow.google/certificates/data-analytics/',
    chapters: [
      {
        id: 'gda-ch1',
        title: { en: 'Course 1: Foundations: Data, Data, Everywhere', ar: 'الدورة ١: الأساسيات: البيانات في كل مكان' },
        estimatedHours: 8,
        objectives: {
          en: [
            'Understanding the data ecosystem and analytical thinking',
            'Data Analyst key roles, tools, and responsibilities',
            'Data-driven decision making in business',
            'Fairness, ethics, and privacy in data analytics'
          ],
          ar: [
            'فهم النظام البيئي للبيانات والتفكير التحليلي',
            'أدوار أدوات ومسؤوليات محلل البيانات',
            'اتخاذ القرارات المبنية على البيانات في الأعمال',
            'العدالة والأخلاقيات والخصوصية في تحليل البيانات'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'Alex The Analyst: How to Become a Data Analyst (Full Course)', ar: 'ألكس المحلل: كيف تصبح محلل بيانات (الدورة الكلاسيكية)' },
              url: 'https://www.youtube.com/watch?v=rwbho0CgEAE',
              embedId: 'rwbho0CgEAE',
              duration: '2:10:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'Google Data Analytics Certificate Program Guide (PDF)', ar: 'دليل برنامج شهادة جوجل لتحليل البيانات' },
              url: 'https://grow.google/certificates/data-analytics/'
            }
          ],
          practice: [
            {
              title: { en: 'W3Schools Data Science & Analytics Basics', ar: 'أساسيات علوم وتحليل البيانات من W3Schools' },
              url: 'https://www.w3schools.com/datascience/'
            }
          ]
        }
      },
      {
        id: 'gda-ch2',
        title: { en: 'Course 2: Ask Questions & Spreadsheets Mastery', ar: 'الدورة ٢: طرح الأسئلة وإتقان جداول البيانات' },
        estimatedHours: 6,
        objectives: {
          en: [
            'Formulate SMART questions for data analysis',
            'Spreadsheet functions (VLOOKUP, INDEX/MATCH, SUMIFS, Pivot Tables)',
            'Structured problem-solving frameworks',
            'Communicating effectively with stakeholders'
          ],
          ar: [
            'صياغة الأسئلة الذكية (SMART) لتحليل البيانات',
            'دوال جداول البيانات (VLOOKUP, INDEX/MATCH, SUMIFS, الجداول المحورية)',
            'أطر حل المشكلات المنظمة',
            'التواصل الفعال مع أصحاب المصلحة'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'Alex The Analyst: Excel & Google Sheets Full Course for Beginners', ar: 'ألكس المحلل: دورة إكسل وجداول جوجل كاملة للمبتدئين' },
              url: 'https://www.youtube.com/watch?v=rwbho0CgEAE',
              embedId: 'rwbho0CgEAE',
              duration: '2:10:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'SMART Data Analysis Questions Framework Guide', ar: 'دليل إطار الأسئلة الذكية لتحليل البيانات' },
              url: 'https://grow.google/certificates/data-analytics/'
            }
          ],
          practice: [
            {
              title: { en: 'Excel / Spreadsheet Formulas Practice Exercises', ar: 'تمارين تدريبية لدوال وصيغ الإكسل' },
              url: 'https://www.w3schools.com/excel/'
            }
          ]
        }
      },
      {
        id: 'gda-ch3',
        title: { en: 'Course 3 & 4: SQL Database Essentials & Data Cleaning', ar: 'الدورة ٣ و ٤: أساسيات قواعد بيانات SQL وتنظيف البيانات' },
        estimatedHours: 10,
        objectives: {
          en: [
            'Relational database concepts (Tables, Primary/Foreign Keys, Schemas)',
            'Writing SQL queries (SELECT, WHERE, JOIN, GROUP BY, HAVING, Subqueries)',
            'Data cleaning techniques (Handling missing values, duplicate removal, type casting)',
            'Ensuring data integrity and credibility (ROCCC standard)'
          ],
          ar: [
            'مفاهيم قواعد البيانات العلاقية (الجداول، المفاتيح الأساسية/الخارجية)',
            'كتابة استعلامات SQL (SELECT, WHERE, JOIN, GROUP BY, HAVING)',
            'تقنيات تنظيف البيانات (التعامل مع القيم المفقودة، إزالة التكرار)',
            'ضمان سلامة ومصداقية البيانات (معيار ROCCC)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: SQL Tutorial - Full Database Course for Beginners', ar: 'فري كود كامب: دورة قواعد البيانات و SQL الكاملة للمبتدئين' },
              url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
              embedId: 'HXV3zeQKqGY',
              duration: '4:20:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'SQL Syntax & Functions Cheat Sheet (PDF)', ar: 'ورقة تلخيصية لأوامر ودوال SQL' },
              url: 'https://www.w3schools.com/sql/sql_ref_keywords.asp'
            }
          ],
          practice: [
            {
              title: { en: 'W3Schools Free Interactive SQL Practice Online', ar: 'تدريب تفاعلي اونلاين لـ SQL من W3Schools' },
              url: 'https://www.w3schools.com/sql/sql_exercises.asp'
            }
          ]
        }
      },
      {
        id: 'gda-ch4',
        title: { en: 'Course 5 & 6: Data Visualization & R Programming', ar: 'الدورة ٥ و ٦: تصور البيانات وتطوير R' },
        estimatedHours: 8,
        objectives: {
          en: [
            'Creating interactive dashboards in Tableau Public',
            'Data storytelling and visual design principles (Color, Contrast, Layout)',
            'Introduction to R programming in RStudio (vectors, data frames, ggplot2)',
            'Documenting code and creating a Capstone Portfolio Project'
          ],
          ar: [
            'إنشاء لوحات تحكم تفاعلية في Tableau Public',
            'سرد قصص البيانات ومبادئ التصميم البصري (الألوان، التباين)',
            'مقدمة لبرمجة R في RStudio (المتجهات، أطر البيانات، ggplot2)',
            'توثيق الكود وإنشاء مشروع المحفظة النهائي (Capstone)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: R Programming Tutorial for Data Science', ar: 'فري كود كامب: دورة لغة R لعلوم البيانات' },
              url: 'https://www.youtube.com/watch?v=_V8eKsto3Ug',
              embedId: '_V8eKsto3Ug',
              duration: '2:10:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'Tableau Desktop Quick Start Guide', ar: 'دليل البدء السريع لبرنامج Tableau' },
              url: 'https://public.tableau.com/'
            }
          ],
          practice: [
            {
              title: { en: 'Tableau Public Sample Datasets & Viz Projects', ar: 'مشاريع وتطبيقات تفاعلية على Tableau Public' },
              url: 'https://public.tableau.com/'
            }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'Complete the capstone project — having a real portfolio project is what gets you hired as a Data Analyst',
        'Master SQL JOINs and GROUP BY queries, as SQL is the #1 requested skill in technical interviews',
        'Publish your Tableau dashboards on Tableau Public and share the link on your LinkedIn profile',
        'Spreadsheets and SQL form 80% of your daily job tasks in entry-level roles'
      ],
      ar: [
        'أكمل مشروع التخرج — وجود ملف أعمال عملي حقيقي هو ما يجعلك تتسابق الشركات لتوظيفك',
        'أتقن عمليات الربط (JOINs) والتجميع (GROUP BY) في SQL لأنها أكثر مهارة تُسأل عنها في المقابلات',
        'انشر لوحات قياس Tableau الخاصة بك على Tableau Public وشارك الرابط على بروفايلك في LinkedIn',
        'جداول البيانات و SQL تشكل ٨٠٪ من مهام عملك اليومية في الوظائف المبتدئة'
      ]
    }
  },
  {
    id: 'pmi-capm',
    careerPath: 'project',
    name: { en: 'CAPM - Certified Associate in Project Management (PMBOK 7)', ar: 'CAPM - مساعد معتمد في إدارة المشاريع' },
    shortName: { en: 'CAPM', ar: 'CAPM' },
    description: {
      en: 'PMI\'s global entry-level project management certification based on PMBOK 7th Edition. Covers Predictive (Waterfall), Agile, Hybrid frameworks, and Business Analysis principles.',
      ar: 'شهادة إدارة المشاريع التأسيسية من PMI المعتمدة على دليل PMBOK الإصدار السابع. تغطي المنهجيات التنبؤية، الأجايل، الهجينة، ومبادئ تحليل الأعمال.'
    },
    organization: 'PMI (Project Management Institute)',
    difficulty: 'intermediate',
    estimatedWeeks: 8,
    examCost: '$300 (PMI Member) / $400 (Non-Member)',
    passingScore: 'Above Target',
    examDuration: '180 minutes',
    totalQuestions: '150 questions',
    officialExamUrl: 'https://www.pmi.org/certifications/certified-associate-capm',
    officialSiteUrl: 'https://www.pmi.org',
    chapters: [
      {
        id: 'capm-ch1',
        title: { en: 'Domain 1: Project Management Fundamentals & Core Concepts', ar: 'المجال ١: أساسيات ومفاهيم إدارة المشاريع' },
        estimatedHours: 8,
        objectives: {
          en: [
            'Project life cycles, phases, and environment factors (EEFs & OPAs)',
            'Roles of Project Manager, Product Owner, Scrum Master, and Project Sponsor',
            'Stakeholder identification and engagement planning',
            'Project Integration Management and Project Charter creation'
          ],
          ar: [
            'دورات حياة المشاريع، المراحل، والعوامل البيئية والتنظيمية',
            'أدوار مدير المشروع، مالك المنتج، ماستر السكرم، وراعي المشروع',
            'تحديد أصحاب المصلحة وتخطيط مشاركتهم',
            'إدارة تكامل المشروع وإنشاء ميثاق المشروع (Project Charter)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'Ricardo Vargas: PMBOK 7th Edition Process Group & Value Delivery System', ar: ' ريكاردو فارجاس: نظام تسليم القيمة ودليل PMBOK الإصدار السابع' },
              url: 'https://www.youtube.com/watch?v=2i99s9x7m3Q',
              embedId: '2i99s9x7m3Q',
              duration: '55:10'
            },
            {
              title: { en: 'Alvin the PM: CAPM Exam Complete Overview & Strategy', ar: 'ألفين PM: استراتيجية ومراجعة امتحان CAPM' },
              url: 'https://www.youtube.com/watch?v=i69U0lvi89c',
              embedId: 'i69U0lvi89c',
              duration: '42:15'
            }
          ],
          pdfs: [
            {
              title: { en: 'PMI Official CAPM Exam Content Outline (ECO PDF)', ar: 'مخطط محتوى امتحان CAPM الرسمي من PMI (PDF)' },
              url: 'https://www.pmi.org/certifications/certified-associate-capm'
            }
          ],
          practice: [
            {
              title: { en: 'PM Training Free CAPM Practice Exam Questions', ar: 'أسئلة تدريبية مجانية لشهادة CAPM من PM Training' },
              url: 'https://www.pmtraining.com/free-capm-practice-exam'
            }
          ]
        }
      },
      {
        id: 'capm-ch2',
        title: { en: 'Domain 2: Predictive (Waterfall) Methodology', ar: 'المجال ٢: المنهجية التنبؤية (الشلال)' },
        estimatedHours: 10,
        objectives: {
          en: [
            'Scope Management (WBS - Work Breakdown Structure & Scope Baseline)',
            'Schedule Management (Critical Path Method CPM, Gantt Charts, Network Diagrams)',
            'Cost Management (EVM - Earned Value Management: CPI, SPI, EV, PV, AC)',
            'Risk Management (Qualitative & Quantitative Risk Analysis, Risk Register)'
          ],
          ar: [
            'إدارة النطاق (هيكل تفكيك العمل WBS وخط أساس النطاق)',
            'إدارة الجدول الزمني (طريقة المسار الحرج CPM، مخططات جانت)',
            'إدارة التكلفة (إدارة القيمة المكتسبة EVM: CPI, SPI, EV, PV, AC)',
            'إدارة المخاطر (التحليل الكيفي والكمي، سجل المخاطر)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'Ricardo Vargas: PMBOK 7th Edition Deep Dive', ar: 'ريكاردو فارجاس: تعمق في دليل PMBOK 7' },
              url: 'https://www.youtube.com/watch?v=2i99s9x7m3Q',
              embedId: '2i99s9x7m3Q',
              duration: '55:10'
            }
          ],
          pdfs: [
            {
              title: { en: 'PMBOK 7th Edition Summary Cheat Sheet', ar: 'ورقة تلخيصية شاملة لدليل PMBOK الإصدار السابع' },
              url: 'https://www.pmi.org/pmbok-guide-standards/foundational/PMBOK'
            }
          ],
          practice: [
            {
              title: { en: 'EVM Formulas & Critical Path Practice Quiz', ar: 'اختبار تدريبي على معادلات EVM والمسار الحرج' },
              url: 'https://www.pmtraining.com/free-capm-practice-exam'
            }
          ]
        }
      },
      {
        id: 'capm-ch3',
        title: { en: 'Domain 3: Agile & Adaptive Frameworks', ar: 'المجال ٣: أطر عمل الأجايل والمنهجيات التكيفية' },
        estimatedHours: 8,
        objectives: {
          en: [
            'Agile Manifesto 4 Values and 12 Principles',
            'Scrum Framework (Sprint Planning, Daily Standup, Review, Retrospective)',
            'Scrum Artifacts (Product Backlog, Sprint Backlog, Increment)',
            'Kanban Method (WIP limits, Cumulative Flow Diagrams)'
          ],
          ar: [
            'القيم الأربعة والمبادئ الـ ١٢ لبيان الأجايل (Agile Manifesto)',
            'إطار عمل سكرم (تخطيط السبرنت، الاجتماع اليومي، المراجعة، الاسترجاع)',
            'مخرجات السكرم (سجل المنتج، سجل السبرنت، الزيادة المكتملة)',
            'منهجية كانبان (حدود العمل قيد التنفيذ WIP)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: Agile Project Management & Scrum Course', ar: 'فري كود كامب: دورة إدارة المشاريع بطريقة الأجايل والسكرم' },
              url: 'https://www.youtube.com/watch?v=2i99s9x7m3Q',
              embedId: '2i99s9x7m3Q',
              duration: 'Full Course'
            }
          ],
          pdfs: [
            {
              title: { en: 'Official Scrum Guide 2020 by Ken Schwaber & Jeff Sutherland', ar: 'دليل السكرم الرسمي لعام ٢٠٢٠ (PDF)' },
              url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf'
            }
          ],
          practice: [
            {
              title: { en: 'Agile & Scrum CAPM Practice Questions', ar: 'أسئلة تدريبية لامتحان CAPM في الأجايل والسكرم' },
              url: 'https://www.pmtraining.com/free-capm-practice-exam'
            }
          ]
        }
      },
      {
        id: 'capm-ch4',
        title: { en: 'Domain 4: Business Analysis Frameworks', ar: 'المجال ٤: أطر ومبادئ تحليل الأعمال' },
        estimatedHours: 6,
        objectives: {
          en: [
            'Business Analysis roles and responsibilities in projects',
            'Requirements elicitation, analysis, and traceability matrix (RTM)',
            'Business Case development and Benefits Realization Plan',
            'Product roadmap and User Story mapping'
          ],
          ar: [
            'أدوار ومسؤوليات محققي ومحللي الأعمال في المشاريع',
            'استخراج المتطلبات، تحليلها، ومصفوفة تتبع المتطلبات (RTM)',
            'تطوير دراسة الجدوى وخطة تحقيق المنافع',
            'خارطة طريق المنتج وتخطيط قصص المستخدمين'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'Business Analysis Fundamentals for CAPM & PMP', ar: 'أساسيات تحليل الأعمال لامتحانات CAPM و PMP' },
              url: 'https://www.youtube.com/watch?v=i69U0lvi89c',
              embedId: 'i69U0lvi89c',
              duration: '35:20'
            }
          ],
          pdfs: [
            {
              title: { en: 'PMI Business Analysis Practice Guide Overview', ar: 'نظرة عامة على دليل ممارسة تحليل الأعمال من PMI' },
              url: 'https://www.pmi.org/certifications/certified-associate-capm'
            }
          ],
          practice: [
            {
              title: { en: 'CAPM Business Analysis Practice Quiz', ar: 'اختبار تدريبي في تحليل الأعمال لشهادة CAPM' },
              url: 'https://www.pmtraining.com/free-capm-practice-exam'
            }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'The current CAPM exam uses PMBOK 7th Edition and includes 50% Agile/Hybrid questions',
        'Earned Value Management (EVM) math formulas are easy points — memorize EV, PV, AC, CPI, SPI formulas',
        'PMI membership lowers your exam fee by $100 and grants a free official PDF copy of PMBOK 7',
        'Read the 2020 Scrum Guide — it takes 20 minutes to read and covers 20% of your exam'
      ],
      ar: [
        'امتحان CAPM الحالي يعتمد على الإصدار السابع ويتضمن ٥٠٪ أسئلة أجايل وهجينة',
        'قوانين القيمة المكتسبة (EVM) نقاط مضمونة — احفظ قوانين CPI, SPI, EV, PV, AC',
        'عضوية PMI تخفض لك رسم الامتحان بـ ١٠٠ دولار وتمنحك نسختك الرسمية من دليل PMBOK 7 مجاناً',
        'اقرأ دليل السكرم الرسمي لعام ٢٠٢٠ — يستغرق ٢٠ دقيقة قراءة ويغطي ٢٠٪ من أسئلة الامتحان'
      ]
    }
  },
  {
    id: 'cisco-ccna',
    careerPath: 'networking',
    name: { en: 'Cisco CCNA 200-301 (Cisco Certified Network Associate)', ar: 'سيسكو CCNA (200-301)' },
    shortName: { en: 'CCNA', ar: 'CCNA' },
    description: {
      en: 'The industry-standard gold certification for network engineering. Validates your ability to configure, manage, and secure enterprise IP networks, switches, routers, and automation.',
      ar: 'المعيار الذهبي لشهادات هندسة الشبكات. يثبت قدرتك على تكوين، إدارة، وتأمين شبكات IP، المبدلات، الموجهات، والأتمتة.'
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
        title: { en: 'Domain 1: Network Fundamentals & Subnetting', ar: 'المجال ١: أساسيات الشبكات والتقسيم الفرعي' },
        estimatedHours: 12,
        objectives: {
          en: [
            'Compare OSI 7-Layer Model vs TCP/IP Protocol Suite',
            'IPv4 Addressing & Binary Subnetting (FLSM, VLSM, CIDR notation)',
            'IPv6 Addressing types (Unicast, Multicast, Anycast, Link-Local)',
            'Cabling types (Fiber, UTP, Cat6) and Network Topologies (Star, Mesh, Spine-Leaf)'
          ],
          ar: [
            'مقارنة طبقات نموذج OSI السبعة مع نموذج TCP/IP',
            'عنونة IPv4 والتقسيم الفرعي (FLSM, VLSM, تدليل CIDR)',
            'أنواع عنونة IPv6 (Bcast, Multicast, Anycast, Link-Local)',
            'أنواع الكابلات وطوبولوجيا الشبكات (النجمة، الشبكية، Spine-Leaf)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: CCNA 200-301 Full Course (12 Hours)', ar: 'فري كود كامب: دورة CCNA الشاملة (١٢ ساعة)' },
              url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
              embedId: 'H8W9oMNSuwo',
              duration: '11:58:00'
            },
            {
              title: { en: 'NetworkChuck: You Need to Learn Subnetting RIGHT NOW!', ar: 'نتورك تشاك: يجب أن تتعلم التقسيم الفرعي الآن!' },
              url: 'https://www.youtube.com/watch?v=bwX3gE82-tM',
              embedId: 'bwX3gE82-tM',
              duration: '22:15'
            }
          ],
          pdfs: [
            {
              title: { en: 'Cisco CCNA 200-301 Official Blueprint & Exam Topics (PDF)', ar: 'المخطط الرسمي والمواضيع لامتحان CCNA 200-301' },
              url: 'https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html'
            },
            {
              title: { en: 'Subnetting Cheat Sheet & Reference Chart', ar: 'ورقة مرجعية شاملة لقوانين التقسيم الفرعي' },
              url: 'https://subnettingpractice.com/'
            }
          ],
          practice: [
            {
              title: { en: 'SubnettingPractice.com Free Infinite Practice Generator', ar: 'مولد تمارين التقسيم الفرعي التفاعلي المباشر' },
              url: 'https://subnettingpractice.com/'
            }
          ]
        }
      },
      {
        id: 'ccna-ch2',
        title: { en: 'Domain 2: Network Access (LAN Switching)', ar: 'المجال ٢: الوصول للشبكة (مبدلات الشبكة المحلية LAN)' },
        estimatedHours: 10,
        objectives: {
          en: [
            'VLANs (Virtual LANs), 802.1Q Trunking, and Native VLANs',
            'Spanning Tree Protocol (STP, RSTP, PortFast, BPDU Guard)',
            'EtherChannel (LACP, PAgP, Static bundling)',
            'Cisco Discovery Protocol (CDP) & Link Layer Discovery Protocol (LLDP)'
          ],
          ar: [
            'شبكات VLAN، تجذير 802.1Q، والشبكات الافتراضية الأصلية',
            'بروتوكول الشجرة الممتدة STP (RSTP, PortFast, BPDU Guard)',
            'تقنية دمج القنوات EtherChannel (LACP, PAgP)',
            'بروتوكولات اكتشاف الأجهزة CDP و LLDP'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'Jeremy\'s IT Lab / FreeCodeCamp: VLANs, Trunking & STP', ar: 'مختبر جيريمي / فري كود كامب: شرح VLANs وبروتوكول STP' },
              url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
              embedId: 'H8W9oMNSuwo',
              duration: '2:15:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'Cisco Packet Tracer Free Download & Student Setup Guide', ar: 'دليل تحميل وتثبيت برنامج Packet Tracer للطلاب' },
              url: 'https://www.netacad.com/courses/packet-tracer'
            }
          ],
          practice: [
            {
              title: { en: 'Jeremy\'s IT Lab Free Packet Tracer Guided Labs', ar: 'مختبرات تطبيقات Packet Tracer الجاهزة من جيريمي' },
              url: 'https://www.jeremysitlab.com/'
            }
          ]
        }
      },
      {
        id: 'ccna-ch3',
        title: { en: 'Domain 3: IP Connectivity (Routing & OSPF)', ar: 'المجال ٣: اتصال IP (التوجيه وبروتوكول OSPF)' },
        estimatedHours: 12,
        objectives: {
          en: [
            'Routing table components (Administrative Distance, Metric, Prefix length)',
            'Static Routing (Default routes, Floating static routes)',
            'Single-Area OSPFv2 (Neighbor adjacency, Router ID, Cost calculation)',
            'First Hop Redundancy Protocols (FHRP - HSRP concepts)'
          ],
          ar: [
            'مكونات جدول التوجيه (المسافة الإدارية AD، التكلفة Metric، طول البادئة)',
            'التوجيه الثابت (المسار الافتراضي، المسارات الثابتة العائمة)',
            'بروتوكول OSPFv2 أحادي المنطقة (تأليف الجيران، معرّف الموجه Router ID)',
            'بروتوكولات التكرار للقفزة الأولى HSRP'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: CCNA IP Connectivity & OSPF Routing', ar: 'فري كود كامب: اتصال IP وتوجيه OSPF' },
              url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
              embedId: 'H8W9oMNSuwo',
              duration: '2:40:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'Cisco IOS CLI Commands Cheat Sheet for CCNA', ar: 'ورقة الأوامر التنفيذية لشبكات سيسكو Cisco IOS' },
              url: 'https://www.cisco.com/'
            }
          ],
          practice: [
            {
              title: { en: 'CCNA Routing & OSPF Lab Practice Exercises', ar: 'تمارين ومختبرات توجيه OSPF لشهادة CCNA' },
              url: 'https://www.jeremysitlab.com/'
            }
          ]
        }
      },
      {
        id: 'ccna-ch4',
        title: { en: 'Domain 4 & 5: IP Services & Security Fundamentals', ar: 'المجال ٤ و ٥: خدمات IP وأساسيات الأمان' },
        estimatedHours: 10,
        objectives: {
          en: [
            'NAT & PAT (Static NAT, Dynamic NAT, Port Address Translation)',
            'NTP, DHCP, DNS, and SNMP network management',
            'Access Control Lists (Standard ACLs, Extended ACLs)',
            'Layer 2 Security (DHCP Snooping, Dynamic ARP Inspection, Port Security)'
          ],
          ar: [
            'ترجمة العناوين NAT و PAT (الثابت، الديناميكي، ترجمة منافذ العناوين)',
            'إدارة خدمات الشبكة NTP, DHCP, DNS, SNMP',
            'قوائم التحكم بالوصول ACLs (القياسية والممتدة)',
            'أمان الطبقة الثانية (DHCP Snooping, DAI, Port Security)'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: CCNA IP Services, NAT & ACL Security', ar: 'فري كود كامب: خدمات IP و NAT وقوائم التحكم ACLs' },
              url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
              embedId: 'H8W9oMNSuwo',
              duration: '2:10:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'Cisco Layer 2 Security Best Practices Guide', ar: 'أفضل ممارسات أمان الطبقة الثانية من سيسكو' },
              url: 'https://www.cisco.com/'
            }
          ],
          practice: [
            {
              title: { en: 'NetworkChuck: Practice Building ACLs in Packet Tracer', ar: 'تطبيق بناء قوائم التحكم بالوصول في Packet Tracer' },
              url: 'https://www.youtube.com/watch?v=bwX3gE82-tM'
            }
          ]
        }
      },
      {
        id: 'ccna-ch5',
        title: { en: 'Domain 6: Network Automation & Programmability', ar: 'المجال ٦: أتمتة الشبكات وقابلية البرمجة' },
        estimatedHours: 6,
        objectives: {
          en: [
            'Traditional network management vs Automation',
            'REST APIs and HTTP verbs (GET, POST, PUT, DELETE)',
            'Configuration Management tools (Ansible, Puppet, Chef)',
            'JSON data encoding formats and Python basics for networking'
          ],
          ar: [
            'الإدارة التقليدية للشبكة مقابل الأتمتة',
            'واجهات البرمجة REST APIs وأوامر HTTP',
            'أدوات إدارة التكوين (Ansible, Puppet, Chef)',
            'تنسيق بيانات JSON وأساسيات بايثون للشبكات'
          ]
        },
        resources: {
          videos: [
            {
              title: { en: 'FreeCodeCamp: Network Automation, REST APIs & Python for CCNA', ar: 'فري كود كامب: أتمتة الشبكات وواجهات REST APIs' },
              url: 'https://www.youtube.com/watch?v=H8W9oMNSuwo',
              embedId: 'H8W9oMNSuwo',
              duration: '1:30:00'
            }
          ],
          pdfs: [
            {
              title: { en: 'Cisco DevNet Fundamentals for CCNA Students', ar: 'أساسيات DevNet من سيسكو لطلاب CCNA' },
              url: 'https://developer.cisco.com/learning/'
            }
          ],
          practice: [
            {
              title: { en: 'Cisco DevNet Free Interactive Learning Labs', ar: 'مختبرات تفاعلية مجانية من Cisco DevNet' },
              url: 'https://developer.cisco.com/learning/'
            }
          ]
        }
      }
    ],
    examTips: {
      en: [
        'Jeremy\'s IT Lab & FreeCodeCamp on YouTube are the top recommended free video courses for CCNA',
        'Subnetting speed is mandatory — practice daily until you can calculate subnets in under 30 seconds',
        'Download Cisco Packet Tracer for free from NetAcad to build real routers, switches, and firewalls',
        'Pay close attention to OSPF configuration commands (`network`, `area`, `router-id`)'
      ],
      ar: [
        'دورة Jeremy\'s IT Lab و FreeCodeCamp على يوتيوب هما أفضل دورات مجانية لـ CCNA — أكمل جميع تطبيقات Packet Tracer',
        'سرعة التقسيم الفرعي إجبارية — تدرب يومياً حتى تحسب الشبكات الفرعية في أقل من ٣٠ ثانية',
        'حمل برنامج Cisco Packet Tracer مجاناً من NetAcad لبناء موجهات ومبدلات وجدران نارية واقعية',
        'انتبه جيداً لأوامر إعداد OSPF مثل (`network`, `area`, `router-id`)'
      ]
    }
  }
];
