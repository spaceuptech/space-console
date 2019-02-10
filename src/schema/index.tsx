export interface Config {
  projects: Map<string, Project>
}

export interface Project {
  name: string
  dev: ProjectEnv
  prod: ProjectEnv
}

export interface ProjectEnv {
  secret: string
  modules: Modules
}

export interface Modules {
  crud: Map<string, DB>
  auth: Map<string, AuthProviderConfig>
  realtime: RealtimeConfig
  faas: FaasConfig
}

export interface RealtimeConfig {
  enabled: boolean
  kafka: string
}

export interface FaasConfig {
  enabled: boolean
  nats: string
}

export interface DB {
  isPrimary: boolean
  conn: string
  collections: Map<string, Collection>
}

export interface Collection {
  rules: any
  enableRealTime: boolean
}

export interface AuthProviderConfig {
  enabled: boolean
  id?: string
  secret?: string
}
