import React, {ReactNode} from 'react';

export interface SkillItemProps {
    name: string,
    icon: ReactNode
}

const SkillItem: React.FC<SkillItemProps> = ({name, icon}) => {
    return (
        <div className="rounded-md w-50 p-2 text-gray-400 bg-gray-800 flex items-center">
            <div className="w-6 h-6">
                {icon}
            </div>
            <p className="flex-1 ml-2 font-semibold">{name}</p>
        </div>
    );
};

export default SkillItem;
