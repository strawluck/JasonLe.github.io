import magnetforensics from '../images/magnet_forensics.jpg';
import immersionlab from '../images/immersionlab.jpg';
import kwbadminton from '../images/kw-badminton.jpg';

const experiencesContent = [
    {
        job_title: 'Software Developer',
        company: '@ Magnet Forensics',
        tools: 'C#, XAML, .NET',
        description: [
            'Led team initiative to refactor JSON parsing hunters for artifacts by creating and shipping data models and adding JSON locations to enhance data provided on front end application for 4000+ clients',
            'Architected new data collection from RAM memory into artifacts, designing visualizations on AXIOM Examine to improve user accessibility to 20,000+ data items using C#',
            'Headed daily stand-ups and collaborated with a team of 9 on product specs user testing and code reviews',
        ],
        location_date: 'Waterloo, ON | Jan - Apr 2023',
        image: magnetforensics,
    },
    {
        job_title: 'IT Specialist',
        company: '@ Immersion Lab',
        tools: 'JavaScript, PHP, Apex, HTML/CSS',
        description: [
            'Led new iteration of company website which reduced the site load time by 95% and improved the SEO ranking by analyzing page rendering, eliminating render-blocking JavaScript and CSS, and migrating web hosts',
            'Redesigned feature that substantially improved user experiences on the Salesforce interface through Apex classes that reassigned misdirected tasks to the correct employees',
            'Drove initiative to rebrand subcompany for the CEO of Immersion Lab through scoping and developing a new website using WordPress, PHP, JavaScript and CSS',
        ],
        location_date: 'Waterloo, ON | May - Aug 2022',
        image: immersionlab,
    },
    {
        job_title: 'Front Desk Administrator and Badminton Coach',
        company: '@ K-W Badminton Club',
        tools: 'Excel, Square',
        description: [
            'Attained over a 40% boost in revenue by leading the marketing campaigns for memberships and programs',
            'Prioritized teaching juniors various badminton techniques and presented demonstrations',
            'Coached the Road to OFSAA program for talented and diligent players who were striving to reach OFSAA',
        ],
        location_date: 'Kitchener, ON | Sept 2019 - Present',
        image: kwbadminton,
    },
]

export default experiencesContent;