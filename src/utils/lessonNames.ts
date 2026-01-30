/**
 * Maps lesson IDs to display names for Q&A system
 */
export const lessonNames: Record<string, string> = {
    'earning-money': 'Earning Money',
    'living-on-your-own': 'Living on Your Own',
    'understanding-wants-needs': 'Understanding Wants & Needs',
    'lesson3-wants-needs': 'Understanding Wants & Needs', // Alternative ID
    'saving-investing': 'Saving & Investing',
    'lesson4-saving-investing': 'Saving & Investing',
    'advertising': 'The Influence of Advertising',
    'lesson5-advertising': 'The Influence of Advertising',
    'cost-of-college': 'The Cost of College',
    'lesson6-college': 'The Cost of College',
    'insurance': 'Protecting & Insuring Your Money',
    'lesson7-insurance': 'Protecting & Insuring Your Money',
    'budgeting': 'The Art of Budgeting',
    'lesson8-budgeting': 'The Art of Budgeting',
    'banking': 'Understanding Banking Services',
    'lesson9-banking': 'Understanding Banking Services',
    'take-home-pay': 'Take-Home Pay – Taxes & Deductions',
    'lesson10-take-home-pay': 'Take-Home Pay – Taxes & Deductions',
    'financial-decisions': 'Making Personal Financial Decisions',
    'lesson11-financial-decisions': 'Making Personal Financial Decisions',
    'credit-score': 'Your Credit Score & You',
    'lesson12-credit-score': 'Your Credit Score & You',
    'consumer-privacy': 'Consumer Privacy',
    'lesson13-consumer-privacy': 'Consumer Privacy',
    'using-credit': 'Using Credit',
    'lesson14-using-credit': 'Using Credit',
};

/**
 * Get display name for a lesson ID
 */
export const getLessonName = (lessonId: string | undefined): string => {
    if (!lessonId) return 'Financial Literacy';
    return lessonNames[lessonId] || lessonId;
};
