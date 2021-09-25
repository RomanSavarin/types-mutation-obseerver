export interface IMutationObserver {
  observe: (element: Node, options: IMutationObserverInit) => void;
  disconnect: () => void;
  takeRecords: () => IMutationRecord[];
}

export interface IMutationRecord {
  addedNodes: NodeList;
  attributeName: string | null;
  attributeNamespace: string | null;
  nextSibling: Node | null;
  oldValue: string | null;
  previousSibling: Node | null;
  removedNodes: NodeList;
  target: Node;
  type: MutationRecordType;
}

export type MutationRecordType = "attributes" | "characterData" | "childList";

export interface IMutationObserverInit {
  attributeFilter?: string[];
  attributeOldValue?: boolean;
  attributes?: boolean;
  characterData?: boolean;
  characterDataOldValue?: boolean;
  childList?: boolean;
  subtree?: boolean;
}

export default IMutationObserver;
