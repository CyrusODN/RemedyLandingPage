export interface Message {
  role: 'user' | 'assistant';
  content: string;
  citations?: string[];
  knowledgeAssets?: string[];
}