// ===== Comprehensive Problem Database =====
const expandedProblems = [
    // ===== MATHEMATICS (12 problems) =====
    {
        id: 1,
        subject: 'mathematics',
        difficulty: 'easy',
        title: 'Solving Linear Equations',
        description: 'Learn how to solve basic linear equations',
        problem: 'Solve for x: 2x + 5 = 13',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop',
        solution: 'Step 1: Subtract 5 from both sides\n2x + 5 - 5 = 13 - 5\n2x = 8\n\nStep 2: Divide both sides by 2\nx = 8/2\nx = 4',
        steps: [
            { number: 1, title: 'Identify the equation', content: '2x + 5 = 13' },
            { number: 2, title: 'Subtract 5 from both sides', content: '2x + 5 - 5 = 13 - 5\n2x = 8' },
            { number: 3, title: 'Divide by 2', content: 'x = 8/2\nx = 4' },
            { number: 4, title: 'Verify', content: '2(4) + 5 = 8 + 5 = 13 ✓' }
        ],
        explanation: 'To solve linear equations, isolate the variable by performing the same operations on both sides.',
        views: 1205,
        solved: 342,
        quizQuestion: {
            type: 'multiple',
            question: 'Solve for x: 2x + 5 = 13',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 2,
        subject: 'mathematics',
        difficulty: 'medium',
        title: 'Quadratic Equations',
        description: 'Solve quadratic equations using factoring',
        problem: 'Solve: x² - 5x + 6 = 0',
        image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=400&h=250&fit=crop',
        solution: 'Factor: (x - 2)(x - 3) = 0\nTherefore: x = 2 or x = 3',
        steps: [
            { number: 1, title: 'Write in standard form', content: 'x² - 5x + 6 = 0' },
            { number: 2, title: 'Find factors', content: 'Find two numbers that multiply to 6 and add to -5: -2 and -3' },
            { number: 3, title: 'Factor the expression', content: '(x - 2)(x - 3) = 0' },
            { number: 4, title: 'Solve', content: 'x - 2 = 0 → x = 2\nx - 3 = 0 → x = 3' }
        ],
        explanation: 'Factoring is a useful method for solving quadratic equations when the factors are integers.',
        views: 890,
        solved: 267,
        quizQuestion: {
            type: 'multiple',
            question: 'What are the solutions to x² - 5x + 6 = 0?',
            options: ['x = 1, 6', 'x = 2, 3', 'x = 3, 4', 'x = 0, 5'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 3,
        subject: 'mathematics',
        difficulty: 'hard',
        title: 'Quadratic Formula',
        description: 'Solve using the quadratic formula',
        problem: 'Solve: 2x² + 3x - 2 = 0 using the quadratic formula',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
        solution: 'x = (-b ± √(b²-4ac)) / 2a\na=2, b=3, c=-2\nx = (-3 ± √(9+16)) / 4\nx = (-3 ± 5) / 4\nx = 1/2 or x = -2',
        steps: [
            { number: 1, title: 'Identify coefficients', content: 'a=2, b=3, c=-2' },
            { number: 2, title: 'Calculate discriminant', content: 'b²-4ac = 9 - 4(2)(-2) = 9 + 16 = 25' },
            { number: 3, title: 'Apply formula', content: 'x = (-3 ± √25) / 4\nx = (-3 ± 5) / 4' },
            { number: 4, title: 'Find solutions', content: 'x = 2/4 = 1/2 or x = -8/4 = -2' }
        ],
        explanation: 'The quadratic formula works for all quadratic equations, even when factoring is difficult.',
        views: 645,
        solved: 187,
        quizQuestion: {
            type: 'multiple',
            question: 'Using the quadratic formula on 2x² + 3x - 2 = 0, what is the discriminant?',
            options: ['9', '25', '-25', '16'],
            correct: 1,
            points: 10
        }
    },
    {
        id: 4,
        subject: 'mathematics',
        difficulty: 'easy',
        title: 'Fractions Addition',
        description: 'Add fractions with different denominators',
        problem: 'Add: 1/3 + 1/4 = ?',
        image: 'https://images.unsplash.com/photo-1516534775068-bb57ad6e50b1?w=400&h=250&fit=crop',
        solution: 'Find common denominator: 12\n1/3 = 4/12\n1/4 = 3/12\n4/12 + 3/12 = 7/12',
        steps: [
            { number: 1, title: 'Find LCM of denominators', content: 'LCM(3, 4) = 12' },
            { number: 2, title: 'Convert 1/3', content: '1/3 = 4/12' },
            { number: 3, title: 'Convert 1/4', content: '1/4 = 3/12' },
            { number: 4, title: 'Add fractions', content: '4/12 + 3/12 = 7/12' }
        ],
        explanation: 'To add fractions, find a common denominator and add the numerators.',
        views: 1512,
        solved: 524,
        quizQuestion: {
            type: 'multiple',
            question: 'What is 1/3 + 1/4?',
            options: ['2/7', '5/12', '7/12', '1/12'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 5,
        subject: 'mathematics',
        difficulty: 'medium',
        title: 'Percentage Calculations',
        description: 'Calculate percentages of numbers',
        problem: 'What is 25% of 80?',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
        solution: '25% of 80 = (25/100) × 80 = 0.25 × 80 = 20',
        steps: [
            { number: 1, title: 'Convert percentage to decimal', content: '25% = 25/100 = 0.25' },
            { number: 2, title: 'Multiply by the number', content: '0.25 × 80' },
            { number: 3, title: 'Calculate', content: '20' },
            { number: 4, title: 'Verify', content: '20 is 25% of 80? Yes! 20/80 = 1/4 = 25% ✓' }
        ],
        explanation: 'To find a percentage of a number, convert the percentage to a decimal and multiply.',
        views: 2100,
        solved: 756,
        quizQuestion: {
            type: 'multiple',
            question: 'What is 30% of 150?',
            options: ['30', '40', '45', '50'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 6,
        subject: 'mathematics',
        difficulty: 'hard',
        title: 'Systems of Equations',
        description: 'Solve systems using substitution',
        problem: 'Solve: x + y = 5 and 2x - y = 4',
        image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=250&fit=crop',
        solution: 'From equation 1: y = 5 - x\nSubstitute into equation 2: 2x - (5 - x) = 4\n3x - 5 = 4\n3x = 9\nx = 3, y = 2',
        steps: [
            { number: 1, title: 'Express y in terms of x', content: 'From x + y = 5: y = 5 - x' },
            { number: 2, title: 'Substitute into second equation', content: '2x - (5 - x) = 4' },
            { number: 3, title: 'Simplify', content: '2x - 5 + x = 4\n3x - 5 = 4' },
            { number: 4, title: 'Solve', content: '3x = 9\nx = 3\ny = 5 - 3 = 2' }
        ],
        explanation: 'Substitution method: solve one equation for a variable and substitute into the other.',
        views: 834,
        solved: 245,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the solution to x + y = 5 and 2x - y = 4?',
            options: ['(2, 3)', '(3, 2)', '(1, 4)', '(4, 1)'],
            correct: 1,
            points: 10
        }
    },

    // ===== PHYSICS (10 problems) =====
    {
        id: 7,
        subject: 'physics',
        difficulty: 'easy',
        title: 'Calculating Velocity',
        description: 'Find velocity using distance and time',
        problem: 'A car travels 100 meters in 5 seconds. What is its velocity?',
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
        solution: 'velocity = distance / time\nvelocity = 100 m / 5 s\nvelocity = 20 m/s',
        steps: [
            { number: 1, title: 'Identify given values', content: 'Distance = 100 m, Time = 5 s' },
            { number: 2, title: 'Write the formula', content: 'velocity = distance / time' },
            { number: 3, title: 'Substitute values', content: 'velocity = 100 / 5' },
            { number: 4, title: 'Calculate', content: 'velocity = 20 m/s' }
        ],
        explanation: 'Velocity is the rate of change of position.',
        views: 1890,
        solved: 567,
        quizQuestion: {
            type: 'multiple',
            question: 'If distance = 200m and time = 10s, what is velocity?',
            options: ['10 m/s', '15 m/s', '20 m/s', '25 m/s'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 8,
        subject: 'physics',
        difficulty: 'medium',
        title: 'Newtons Second Law',
        description: 'Understanding F = ma',
        problem: 'A force of 20 N acts on a mass of 4 kg. What is the acceleration?',
        image: 'https://images.unsplash.com/photo-1577720643272-265f434248b0?w=400&h=250&fit=crop',
        solution: 'F = ma\n20 = 4 × a\na = 20/4\na = 5 m/s²',
        steps: [
            { number: 1, title: 'Write Newtons second law', content: 'F = ma' },
            { number: 2, title: 'Rearrange for acceleration', content: 'a = F/m' },
            { number: 3, title: 'Substitute values', content: 'a = 20/4' },
            { number: 4, title: 'Calculate', content: 'a = 5 m/s²' }
        ],
        explanation: 'Force equals mass times acceleration.',
        views: 1234,
        solved: 389,
        quizQuestion: {
            type: 'multiple',
            question: 'If F = 30 N and m = 5 kg, what is acceleration?',
            options: ['5 m/s²', '6 m/s²', '7 m/s²', '8 m/s²'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 9,
        subject: 'physics',
        difficulty: 'hard',
        title: 'Kinetic Energy',
        description: 'Calculate kinetic energy using formula',
        problem: 'A car with mass 1000 kg travels at 20 m/s. What is its kinetic energy?',
        image: 'https://images.unsplash.com/photo-1518611505868-48510c2e2e3f?w=400&h=250&fit=crop',
        solution: 'KE = ½mv²\nKE = ½ × 1000 × 20²\nKE = ½ × 1000 × 400\nKE = 200,000 J',
        steps: [
            { number: 1, title: 'Write kinetic energy formula', content: 'KE = ½mv²' },
            { number: 2, title: 'Calculate v²', content: 'v² = 20² = 400' },
            { number: 3, title: 'Multiply', content: 'KE = ½ × 1000 × 400' },
            { number: 4, title: 'Final answer', content: 'KE = 200,000 J or 200 kJ' }
        ],
        explanation: 'Kinetic energy is the energy of motion.',
        views: 945,
        solved: 234,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the kinetic energy of a 2 kg object moving at 10 m/s?',
            options: ['100 J', '200 J', '50 J', '300 J'],
            correct: 1,
            points: 10
        }
    },
    {
        id: 10,
        subject: 'physics',
        difficulty: 'easy',
        title: 'Speed vs Velocity',
        description: 'Understand the difference',
        problem: 'What is the difference between speed and velocity?',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop',
        solution: 'Speed: scalar quantity, only magnitude (e.g., 60 km/h)\nVelocity: vector quantity, magnitude + direction (e.g., 60 km/h north)',
        steps: [
            { number: 1, title: 'Speed definition', content: 'Scalar quantity - only has magnitude' },
            { number: 2, title: 'Velocity definition', content: 'Vector quantity - has magnitude and direction' },
            { number: 3, title: 'Speed example', content: '100 km/h' },
            { number: 4, title: 'Velocity example', content: '100 km/h northeast' }
        ],
        explanation: 'Key difference: velocity includes direction, speed does not.',
        views: 2156,
        solved: 789,
        quizQuestion: {
            type: 'multiple',
            question: 'Which is a vector quantity?',
            options: ['Speed', 'Distance', 'Velocity', 'Time'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 11,
        subject: 'physics',
        difficulty: 'medium',
        title: 'Work and Energy',
        description: 'Calculate work done by a force',
        problem: 'A force of 50 N pushes an object 10 meters. How much work is done?',
        image: 'https://images.unsplash.com/photo-1537462715957-923c63d7b821?w=400&h=250&fit=crop',
        solution: 'W = F × d × cos(θ)\nFor force in direction of motion: W = F × d\nW = 50 × 10\nW = 500 J',
        steps: [
            { number: 1, title: 'Write work formula', content: 'W = F × d × cos(θ)' },
            { number: 2, title: 'Assume force parallel to motion', content: 'cos(0°) = 1' },
            { number: 3, title: 'Simplify', content: 'W = F × d' },
            { number: 4, title: 'Calculate', content: 'W = 50 × 10 = 500 J' }
        ],
        explanation: 'Work is force times distance when force is in direction of motion.',
        views: 876,
        solved: 298,
        quizQuestion: {
            type: 'multiple',
            question: 'How much work is done by a 30 N force over 5 meters?',
            options: ['100 J', '150 J', '200 J', '250 J'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 12,
        subject: 'physics',
        difficulty: 'hard',
        title: 'Projectile Motion',
        description: 'Analyze projectile motion',
        problem: 'A ball is thrown horizontally at 20 m/s from a height of 45 m. How far does it travel horizontally before hitting the ground?',
        image: 'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?w=400&h=250&fit=crop',
        solution: 'First find time: h = ½gt²\n45 = ½ × 10 × t²\nt² = 9\nt = 3 s\n\nHorizontal distance: x = vₓ × t\nx = 20 × 3\nx = 60 m',
        steps: [
            { number: 1, title: 'Find fall time', content: 'h = ½gt², 45 = 5t²' },
            { number: 2, title: 'Solve for t', content: 't² = 9, t = 3 seconds' },
            { number: 3, title: 'Calculate horizontal distance', content: 'x = velocity × time' },
            { number: 4, title: 'Final answer', content: 'x = 20 × 3 = 60 meters' }
        ],
        explanation: 'Projectile motion combines vertical and horizontal components.',
        views: 567,
        solved: 145,
        quizQuestion: {
            type: 'multiple',
            question: 'In projectile motion, what remains constant?',
            options: ['Vertical velocity', 'Horizontal velocity', 'Total velocity', 'None'],
            correct: 1,
            points: 10
        }
    },

    // ===== CHEMISTRY (10 problems) =====
    {
        id: 13,
        subject: 'chemistry',
        difficulty: 'easy',
        title: 'Balancing Chemical Equations',
        description: 'Master the art of balancing equations',
        problem: 'Balance the equation: H2 + O2 → H2O',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
        solution: '2H2 + O2 → 2H2O\nLeft: 4 H, 2 O | Right: 4 H, 2 O ✓',
        steps: [
            { number: 1, title: 'Count atoms (unbalanced)', content: 'Left: H=2, O=2\nRight: H=2, O=1' },
            { number: 2, title: 'Balance oxygen', content: 'Add 2 to H2O' },
            { number: 3, title: 'Check hydrogen', content: 'Need 2 H2 to get 4 H' },
            { number: 4, title: 'Verify balance', content: 'Left: H=4, O=2\nRight: H=4, O=2 ✓' }
        ],
        explanation: 'In a balanced equation, atoms must be equal on both sides.',
        views: 2345,
        solved: 812,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the balanced equation for: C + O2 → CO2?',
            options: ['C + O2 → CO2', '2C + O2 → 2CO2', 'C + 2O2 → CO2', 'C + O → CO'],
            correct: 0,
            points: 5
        }
    },
    {
        id: 14,
        subject: 'chemistry',
        difficulty: 'medium',
        title: 'Molar Mass Calculation',
        description: 'Calculate molecular weight',
        problem: 'Calculate the molar mass of H2SO4 (sulfuric acid)',
        image: 'https://images.unsplash.com/photo-1530587191325-3db8b1c12e3d?w=400&h=250&fit=crop',
        solution: 'H2SO4:\n2(H) = 2 × 1 = 2\n1(S) = 1 × 32 = 32\n4(O) = 4 × 16 = 64\nTotal = 2 + 32 + 64 = 98 g/mol',
        steps: [
            { number: 1, title: 'Identify elements', content: 'H: 2 atoms, S: 1 atom, O: 4 atoms' },
            { number: 2, title: 'Look up atomic masses', content: 'H=1, S=32, O=16' },
            { number: 3, title: 'Multiply', content: '2(1) + 1(32) + 4(16)' },
            { number: 4, title: 'Sum', content: '2 + 32 + 64 = 98 g/mol' }
        ],
        explanation: 'Molar mass is the sum of atomic masses of all atoms in a molecule.',
        views: 1678,
        solved: 456,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the molar mass of H2O?',
            options: ['16 g/mol', '18 g/mol', '20 g/mol', '22 g/mol'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 15,
        subject: 'chemistry',
        difficulty: 'hard',
        title: 'Stoichiometry',
        description: 'Solve stoichiometric calculations',
        problem: 'If 10 grams of H2 reacts with O2, how many grams of H2O is produced? (2H2 + O2 → 2H2O)',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop',
        solution: 'Molar mass H2 = 2 g/mol, H2O = 18 g/mol\nMoles of H2 = 10/2 = 5 mol\nFrom equation: 2 mol H2 → 2 mol H2O\n5 mol H2 → 5 mol H2O\nMass of H2O = 5 × 18 = 90 g',
        steps: [
            { number: 1, title: 'Calculate molar masses', content: 'H2 = 2 g/mol, H2O = 18 g/mol' },
            { number: 2, title: 'Convert grams to moles', content: '10 g ÷ 2 g/mol = 5 mol H2' },
            { number: 3, title: 'Use mole ratio', content: '2H2 : 2H2O means 5 mol H2 : 5 mol H2O' },
            { number: 4, title: 'Convert to grams', content: '5 mol × 18 g/mol = 90 g H2O' }
        ],
        explanation: 'Stoichiometry uses mole ratios from balanced equations.',
        views: 934,
        solved: 267,
        quizQuestion: {
            type: 'multiple',
            question: 'In 2H2 + O2 → 2H2O, what is the mole ratio of H2 to H2O?',
            options: ['1:1', '2:1', '1:2', '2:2'],
            correct: 0,
            points: 10
        }
    },
    {
        id: 16,
        subject: 'chemistry',
        difficulty: 'easy',
        title: 'Atomic Structure',
        description: 'Understanding atoms',
        problem: 'What are the three main subatomic particles?',
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=250&fit=crop',
        solution: '1. Protons (positive charge, in nucleus)\n2. Neutrons (no charge, in nucleus)\n3. Electrons (negative charge, in shells)',
        steps: [
            { number: 1, title: 'Protons', content: 'Positive charge (+1)\nFound in nucleus\nDetermine element identity' },
            { number: 2, title: 'Neutrons', content: 'No electrical charge\nFound in nucleus\nContribute to mass number' },
            { number: 3, title: 'Electrons', content: 'Negative charge (-1)\nOrbit nucleus in shells\nDetermine chemical properties' },
            { number: 4, title: 'Atom balance', content: 'Neutral atom: # protons = # electrons' }
        ],
        explanation: 'All atoms are made of protons, neutrons, and electrons.',
        views: 2567,
        solved: 934,
        quizQuestion: {
            type: 'multiple',
            question: 'Where are neutrons found?',
            options: ['Nucleus', 'Electron shells', 'Outer orbit', 'Energy levels'],
            correct: 0,
            points: 5
        }
    },
    {
        id: 17,
        subject: 'chemistry',
        difficulty: 'medium',
        title: 'pH Scale',
        description: 'Understanding acidity and basicity',
        problem: 'What is the pH of a solution with [H+] = 0.001 M?',
        image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=250&fit=crop',
        solution: 'pH = -log[H+]\npH = -log(0.001)\npH = -log(10⁻³)\npH = 3',
        steps: [
            { number: 1, title: 'Write pH formula', content: 'pH = -log[H+]' },
            { number: 2, title: 'Express as power of 10', content: '0.001 = 10⁻³' },
            { number: 3, title: 'Apply logarithm', content: 'pH = -log(10⁻³) = -(-3)' },
            { number: 4, title: 'Calculate', content: 'pH = 3 (acidic)' }
        ],
        explanation: 'pH scale ranges from 0-14. pH < 7 is acidic, pH > 7 is basic.',
        views: 1456,
        solved: 389,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the pH if [H+] = 0.01 M?',
            options: ['1', '2', '3', '4'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 18,
        subject: 'chemistry',
        difficulty: 'hard',
        title: 'Electron Configuration',
        description: 'Write electron configurations',
        problem: 'Write the electron configuration for Oxygen (O, atomic number 8)',
        image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=250&fit=crop',
        solution: 'Oxygen (O): 1s² 2s² 2p⁴\nOr: [He] 2s² 2p⁴',
        steps: [
            { number: 1, title: 'Count electrons', content: 'Atomic number 8 = 8 electrons' },
            { number: 2, title: 'Fill orbitals in order', content: '1s² (2), 2s² (2), 2p⁴ (4)' },
            { number: 3, title: 'Verify total', content: '2 + 2 + 4 = 8 ✓' },
            { number: 4, title: 'Write in notation', content: '1s² 2s² 2p⁴' }
        ],
        explanation: 'Electrons fill orbitals following the Aufbau principle.',
        views: 1089,
        solved: 267,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the electron configuration for Carbon (C, atomic number 6)?',
            options: ['1s² 2s²', '1s² 2s² 2p²', '1s² 2p⁴', '2s² 2p⁴'],
            correct: 1,
            points: 10
        }
    },

    // ===== BIOLOGY (10 problems) =====
    {
        id: 19,
        subject: 'biology',
        difficulty: 'easy',
        title: 'Cell Organelles - Mitochondria',
        description: 'Understand mitochondrial function',
        problem: 'What is the function of mitochondria?',
        image: 'https://images.unsplash.com/photo-1530587191325-3db8b1c12e3d?w=400&h=250&fit=crop',
        solution: 'Mitochondria are the "powerhouse of the cell"\nThey produce ATP through cellular respiration',
        steps: [
            { number: 1, title: 'Define mitochondria', content: 'Organelle found in eukaryotic cells' },
            { number: 2, title: 'Main function', content: 'Produces ATP energy molecules' },
            { number: 3, title: 'Process', content: 'Cellular respiration: glucose + O2 → CO2 + H2O + energy' },
            { number: 4, title: 'Importance', content: 'Provides energy for all cell activities' }
        ],
        explanation: 'ATP is the universal energy currency in cells.',
        views: 2891,
        solved: 1023,
        quizQuestion: {
            type: 'multiple',
            question: 'What does ATP stand for?',
            options: ['Adenosine Triphosphate', 'Acetyl Transfer Protein', 'Amino Terminal Phosphate', 'Active Transport Pump'],
            correct: 0,
            points: 5
        }
    },
    {
        id: 20,
        subject: 'biology',
        difficulty: 'medium',
        title: 'DNA Structure',
        description: 'Understanding DNA',
        problem: 'What does DNA stand for and what is its structure?',
        image: 'https://images.unsplash.com/photo-1576091160491-112de59f63d5?w=400&h=250&fit=crop',
        solution: 'DNA = Deoxyribonucleic Acid\nStructure: Double helix with sugar-phosphate backbone and nitrogenous bases',
        steps: [
            { number: 1, title: 'Full name', content: 'Deoxyribonucleic Acid' },
            { number: 2, title: 'Main components', content: 'Sugar (deoxyribose), phosphate, nitrogenous bases' },
            { number: 3, title: 'Structure', content: 'Double helix shaped' },
            { number: 4, title: 'Base pairs', content: 'A-T and G-C' }
        ],
        explanation: 'DNA stores genetic information in the sequence of bases.',
        views: 1756,
        solved: 534,
        quizQuestion: {
            type: 'multiple',
            question: 'Which base pairs with Adenine in DNA?',
            options: ['Guanine', 'Cytosine', 'Thymine', 'Uracil'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 21,
        subject: 'biology',
        difficulty: 'hard',
        title: 'Photosynthesis Equation',
        description: 'Complete photosynthesis process',
        problem: 'Write the balanced equation for photosynthesis',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
        solution: '6CO2 + 6H2O + light energy → C6H12O6 + 6O2\n(Carbon dioxide + Water + Light energy → Glucose + Oxygen)',
        steps: [
            { number: 1, title: 'Reactants', content: 'CO2 from air, H2O from soil, light energy' },
            { number: 2, title: 'Light reactions', content: 'Occur in thylakoids, produce ATP and NADPH' },
            { number: 3, title: 'Calvin cycle', content: 'Occur in stroma, produce glucose' },
            { number: 4, title: 'Complete equation', content: '6CO2 + 6H2O → C6H12O6 + 6O2' }
        ],
        explanation: 'Photosynthesis is how plants convert light energy to chemical energy.',
        views: 1245,
        solved: 378,
        quizQuestion: {
            type: 'multiple',
            question: 'Where does the Calvin cycle occur in the chloroplast?',
            options: ['Thylakoid', 'Stroma', 'Inner membrane', 'Outer membrane'],
            correct: 1,
            points: 10
        }
    },
    {
        id: 22,
        subject: 'biology',
        difficulty: 'easy',
        title: 'Cell Membrane Function',
        description: 'Understanding the cell membrane',
        problem: 'What is the main function of the cell membrane?',
        image: 'https://images.unsplash.com/photo-1576550885918-ffeb5b2a3f6b?w=400&h=250&fit=crop',
        solution: 'The cell membrane:\n1. Controls what enters/exits the cell\n2. Protects the cell\n3. Allows communication between cells',
        steps: [
            { number: 1, title: 'Structure', content: 'Phospholipid bilayer with embedded proteins' },
            { number: 2, title: 'Selective permeability', content: 'Allows some substances through, blocks others' },
            { number: 3, title: 'Transport', content: 'Facilitates movement of materials' },
            { number: 4, title: 'Recognition', content: 'Cells identify each other' }
        ],
        explanation: 'The cell membrane is also called the plasma membrane.',
        views: 2134,
        solved: 756,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the cell membrane made of?',
            options: ['Protein only', 'Lipid only', 'Phospholipids and proteins', 'Carbohydrates only'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 23,
        subject: 'biology',
        difficulty: 'medium',
        title: 'Protein Synthesis',
        description: 'Understanding transcription and translation',
        problem: 'What is the process of protein synthesis?',
        image: 'https://images.unsplash.com/photo-1576091160601-112173b2f3d6?w=400&h=250&fit=crop',
        solution: 'Two steps:\n1. Transcription: DNA → mRNA\n2. Translation: mRNA → Protein',
        steps: [
            { number: 1, title: 'Transcription', content: 'DNA is copied to mRNA in nucleus' },
            { number: 2, title: 'mRNA travels', content: 'mRNA exits nucleus to ribosome' },
            { number: 3, title: 'Translation', content: 'Ribosome reads mRNA, builds protein' },
            { number: 4, title: 'tRNA role', content: 'tRNA brings correct amino acids' }
        ],
        explanation: 'This is called the "central dogma" of molecular biology.',
        views: 1567,
        solved: 445,
        quizQuestion: {
            type: 'multiple',
            question: 'What does mRNA stand for?',
            options: ['Messenger Ribonucleic Acid', 'Mitochondrial RNA', 'Modified RNA', 'Major RNA'],
            correct: 0,
            points: 5
        }
    },
    {
        id: 24,
        subject: 'biology',
        difficulty: 'hard',
        title: 'Cellular Respiration',
        description: 'Complete aerobic respiration',
        problem: 'Describe the stages of aerobic cellular respiration',
        image: 'https://images.unsplash.com/photo-1576115184343-f6265ee2decc?w=400&h=250&fit=crop',
        solution: '1. Glycolysis: Glucose → 2 Pyruvate (2 ATP, 2 NADH)\n2. Kreb\'s Cycle: Produces 2 CO2, 3 NADH, 1 FADH2 per Acetyl-CoA\n3. Electron Transport: NADH and FADH2 → 32-34 ATP',
        steps: [
            { number: 1, title: 'Glycolysis', content: 'Occurs in cytoplasm, glucose split into pyruvate' },
            { number: 2, title: 'Krebs Cycle', content: 'Occurs in mitochondrial matrix' },
            { number: 3, title: 'Electron Transport Chain', content: 'Occurs on inner mitochondrial membrane' },
            { number: 4, title: 'Total yield', content: 'Approximately 30-32 ATP per glucose' }
        ],
        explanation: 'This is the most efficient way to extract energy from glucose.',
        views: 912,
        solved: 267,
        quizQuestion: {
            type: 'multiple',
            question: 'In which part of the mitochondrion does the Krebs cycle occur?',
            options: ['Outer membrane', 'Inner membrane', 'Matrix', 'Cristae'],
            correct: 2,
            points: 10
        }
    },

    // ===== SCIENCE (10 problems) =====
    {
        id: 25,
        subject: 'science',
        difficulty: 'easy',
        title: 'States of Matter',
        description: 'Three states of matter explained',
        problem: 'What are the three states of matter?',
        image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=250&fit=crop',
        solution: '1. Solid - definite shape and volume\n2. Liquid - definite volume, takes shape of container\n3. Gas - no definite shape or volume',
        steps: [
            { number: 1, title: 'Solid State', content: 'Particles tightly packed, definite shape' },
            { number: 2, title: 'Liquid State', content: 'Particles loosely packed, flows, definite volume' },
            { number: 3, title: 'Gas State', content: 'Particles spread out, no shape or volume' },
            { number: 4, title: 'Transitions', content: 'Melting, freezing, boiling, condensation' }
        ],
        explanation: 'State depends on temperature and pressure.',
        views: 3421,
        solved: 1234,
        quizQuestion: {
            type: 'multiple',
            question: 'Which state has particles most tightly packed?',
            options: ['Gas', 'Liquid', 'Solid', 'Plasma'],
            correct: 2,
            points: 5
        }
    },
    {
        id: 26,
        subject: 'science',
        difficulty: 'medium',
        title: 'Newton\'s Laws of Motion',
        description: 'Understanding Newtons three laws',
        problem: 'State Newton\'s three laws of motion',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
        solution: '1st Law: Object at rest stays at rest, object in motion stays in motion\n2nd Law: F = ma\n3rd Law: For every action, there is an equal and opposite reaction',
        steps: [
            { number: 1, title: 'First Law', content: 'Inertia - objects resist change in motion' },
            { number: 2, title: 'Second Law', content: 'Force causes acceleration' },
            { number: 3, title: 'Third Law', content: 'Forces come in pairs' },
            { number: 4, title: 'Example', content: 'Rocket propulsion: exhaust down = rocket up' }
        ],
        explanation: 'These laws form the foundation of classical mechanics.',
        views: 1834,
        solved: 589,
        quizQuestion: {
            type: 'multiple',
            question: 'What does F = ma represent?',
            options: ['1st Law', '2nd Law', '3rd Law', 'Not a law'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 27,
        subject: 'science',
        difficulty: 'hard',
        title: 'Law of Conservation of Energy',
        description: 'Understanding energy conservation',
        problem: 'A ball falls from 10 meters. Calculate the velocity when it hits the ground.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
        solution: 'Potential Energy = Kinetic Energy\nmgh = ½mv²\ngh = ½v²\n10 × 10 = ½v²\nv² = 200\nv = 14.14 m/s',
        steps: [
            { number: 1, title: 'Initial PE', content: 'PE = mgh = 10h' },
            { number: 2, title: 'Final KE', content: 'KE = ½mv²' },
            { number: 3, title: 'Set equal', content: 'mgh = ½mv²' },
            { number: 4, title: 'Solve for v', content: 'v = √(2gh) = √200 = 14.14 m/s' }
        ],
        explanation: 'Energy is neither created nor destroyed, only transformed.',
        views: 1123,
        solved: 334,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the velocity of an object in free fall after 3 seconds (g=10)?',
            options: ['10 m/s', '20 m/s', '30 m/s', '40 m/s'],
            correct: 2,
            points: 10
        }
    },
    {
        id: 28,
        subject: 'science',
        difficulty: 'easy',
        title: 'Water Cycle',
        description: 'Understanding the water cycle',
        problem: 'Explain the water cycle',
        image: 'https://images.unsplash.com/photo-1491927750519-115cf02b3c41?w=400&h=250&fit=crop',
        solution: 'Evaporation → Condensation → Precipitation → Collection\n1. Evaporation: Water from oceans/lakes becomes vapor\n2. Condensation: Vapor cools to form clouds\n3. Precipitation: Water falls as rain/snow\n4. Collection: Water gathers in bodies',
        steps: [
            { number: 1, title: 'Evaporation', content: 'Heat from sun transforms liquid water to vapor' },
            { number: 2, title: 'Condensation', content: 'Rising vapor cools and forms clouds' },
            { number: 3, title: 'Precipitation', content: 'Water falls as rain, snow, sleet, hail' },
            { number: 4, title: 'Collection', content: 'Cycle repeats' }
        ],
        explanation: 'The water cycle is driven by solar energy.',
        views: 2567,
        solved: 912,
        quizQuestion: {
            type: 'multiple',
            question: 'What is evaporation?',
            options: ['Vapor turning to liquid', 'Liquid turning to vapor', 'Solid turning to liquid', 'None of the above'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 29,
        subject: 'science',
        difficulty: 'medium',
        title: 'Ecosystems',
        description: 'Understanding ecosystems',
        problem: 'What are the components of an ecosystem?',
        image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop',
        solution: 'Biotic (living): Plants, animals, microorganisms\nAbiotic (non-living): Soil, water, air, sunlight\nFood chains and food webs show energy flow',
        steps: [
            { number: 1, title: 'Biotic factors', content: 'Producers, consumers, decomposers' },
            { number: 2, title: 'Abiotic factors', content: 'Climate, water, soil, light' },
            { number: 3, title: 'Energy flow', content: 'Sun → Plants → Animals → Decomposers' },
            { number: 4, title: 'Relationships', content: 'Predation, parasitism, mutualism, commensalism' }
        ],
        explanation: 'Ecosystems are balanced systems of interdependent organisms.',
        views: 1678,
        solved: 456,
        quizQuestion: {
            type: 'multiple',
            question: 'What role do decomposers play in an ecosystem?',
            options: ['Produce energy', 'Break down dead matter', 'Hunt prey', 'Provide shelter'],
            correct: 1,
            points: 5
        }
    },
    {
        id: 30,
        subject: 'science',
        difficulty: 'hard',
        title: 'Evolution and Natural Selection',
        description: 'Understanding Darwin\'s theory',
        problem: 'Explain natural selection and evolution',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop',
        solution: 'Natural Selection:\n1. Variation exists in populations\n2. Organisms compete for resources\n3. Organisms with advantageous traits survive\n4. Advantageous traits pass to offspring\n5. Over time, populations change (evolution)',
        steps: [
            { number: 1, title: 'Variation', content: 'Individuals within species differ' },
            { number: 2, title: 'Competition', content: 'Not all organisms survive' },
            { number: 3, title: 'Survival of fittest', content: 'Best adapted survive and reproduce' },
            { number: 4, title: 'Inheritance', content: 'Traits pass to next generation' }
        ],
        explanation: 'Natural selection is the mechanism of evolution.',
        views: 1456,
        solved: 389,
        quizQuestion: {
            type: 'multiple',
            question: 'What is the core idea of natural selection?',
            options: ['Organisms change instantly', 'Beneficial traits increase in populations', 'All organisms are identical', 'Individuals adapt in lifetime'],
            correct: 1,
            points: 10
        }
    }
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = expandedProblems;
}