import path from 'node:path'

export const projectDir = path.join(__dirname, '..')

export const resolveProjectPath = (...args: string[]) => path.join(projectDir, ...args)

export const resolvePackagePath = (...args: string[]) => path.join(projectDir, 'packages', ...args)
