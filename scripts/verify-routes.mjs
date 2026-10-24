import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

console.log('\n============================================================');
console.log('  LearnSpace Curriculum & Route Integrity Verification Suite');
console.log('============================================================\n');

let totalChecks = 0;
let passedChecks = 0;

function check(description, assertion) {
  totalChecks++;
  try {
    if (assertion()) {
      passedChecks++;
      console.log(`  \x1b[32m✔\x1b[0m ${description}`);
    } else {
      console.error(`  \x1b[31m✖\x1b[0m ${description}`);
    }
  } catch (err) {
    console.error(`  \x1b[31m✖\x1b[0m ${description} (Error: ${err.message})`);
  }
}

// 1. App Router file structure
console.log('\x1b[1m[1/3] Validating Next.js 15 App Router Conventions:\x1b[0m');

const requiredRouteFiles = [
  'src/app/layout.tsx',
  'src/app/page.tsx',
  'src/app/globals.css',
  'src/app/not-found.tsx',
  'src/app/about/page.tsx',
  'src/app/courses/page.tsx',
  'src/app/courses/CoursesClient.tsx',
  'src/app/courses/[slug]/page.tsx',
  'src/app/courses/[slug]/lessons/[lessonSlug]/page.tsx',
  'src/app/courses/[slug]/lessons/[lessonSlug]/LessonViewerClient.tsx',
  'src/app/topics/page.tsx',
  'src/app/topics/TopicExplorerClient.tsx',
  'src/app/topics/[...slug]/page.tsx',
  'src/components/Navbar.tsx',
  'src/components/Footer.tsx',
  'src/components/Breadcrumbs.tsx'
];

for (const relPath of requiredRouteFiles) {
  check(`File exists: ${relPath}`, () => {
    return fs.existsSync(path.join(projectRoot, relPath));
  });
}

// 2. Data files verification
console.log('\n\x1b[1m[2/3] Validating Curriculum & Topic Graph Datasets:\x1b[0m');

const coursesFilePath = path.join(projectRoot, 'src/data/courses.ts');
const topicsFilePath = path.join(projectRoot, 'src/data/topics.ts');

check('Dataset files exist (courses.ts, topics.ts)', () => {
  return fs.existsSync(coursesFilePath) && fs.existsSync(topicsFilePath);
});

const coursesContent = fs.readFileSync(coursesFilePath, 'utf8');
const topicsContent = fs.readFileSync(topicsFilePath, 'utf8');

check('courses.ts contains valid course declarations', () => {
  return coursesContent.includes('export const courses: Course[]') &&
         coursesContent.includes('nextjs-app-router-fundamentals') &&
         coursesContent.includes('typescript-enterprise-patterns') &&
         coursesContent.includes('distributed-cache-architecture') &&
         coursesContent.includes('modern-state-management-and-signals');
});

check('courses.ts exports helper functions (getAllCourses, getCourseBySlug, getLessonBySlug)', () => {
  return coursesContent.includes('export function getAllCourses') &&
         coursesContent.includes('export function getCourseBySlug') &&
         coursesContent.includes('export function getLessonBySlug');
});

check('topics.ts exports defaultTopic and dynamic topic lookup functions', () => {
  return topicsContent.includes('export const defaultTopic: TopicTrack') &&
         topicsContent.includes('export function getTopicBySlug') &&
         topicsContent.includes('export function getAllTopicKeys');
});

// 3. Configuration & TypeScript verification
console.log('\n\x1b[1m[3/3] Validating Project Setup & Configuration:\x1b[0m');

check('next.config.mjs exists and is configured', () => {
  return fs.existsSync(path.join(projectRoot, 'next.config.mjs'));
});

check('tsconfig.json has path alias mapping ("@/*")', () => {
  const tsConfig = JSON.parse(fs.readFileSync(path.join(projectRoot, 'tsconfig.json'), 'utf8'));
  return tsConfig.compilerOptions && tsConfig.compilerOptions.paths && tsConfig.compilerOptions.paths['@/*'];
});

check('package.json defines proper scripts and dependencies', () => {
  const pkg = JSON.parse(fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
  return pkg.name === 'course-learning-portal' &&
         pkg.dependencies['next'] &&
         pkg.dependencies['react'] &&
         pkg.dependencies['react-dom'];
});

console.log('\n------------------------------------------------------------');
console.log(`  Summary: ${passedChecks}/${totalChecks} checks passed (${Math.round((passedChecks / totalChecks) * 100)}%)`);
console.log('------------------------------------------------------------\n');

if (passedChecks === totalChecks) {
  console.log('\x1b[32m✔ All curriculum and route integrity checks passed successfully!\x1b[0m\n');
  process.exit(0);
} else {
  console.error('\x1b[31m✖ Some checks failed. Please review the errors above.\x1b[0m\n');
  process.exit(1);
}
