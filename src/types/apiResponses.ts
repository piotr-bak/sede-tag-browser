export interface Tag {
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    count: number;
    name: string;
}

export interface Collective {
    tags: string[];
    external_links: ExternalLink[];
    description: string;
    link: string;
    name: string;
    slug: string;
}

export interface ExternalLink {
    type: string;
    link: string;
}

export interface TagResponse {
    items: (Tag | { collectives: Collective[] })[]; // Union type for different structures in items array
}
