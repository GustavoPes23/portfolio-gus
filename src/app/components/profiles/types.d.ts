type Link = string;

interface ProfileProps {
    readonly src: string;
    readonly alt: string;
    readonly link: Link;
};

interface NameProps {
    readonly name: string;
    readonly lastName: string;
}

interface JobProps {
    readonly description: string;
    readonly place: string;
    readonly link: Link;
}

interface LinkedinLogoProps {
    readonly link: Link;
    readonly className?: string;
}

export type {
    ProfileProps,
    NameProps,
    JobProps,
    LinkedinLogoProps
};