import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Breadcrumb = ({ 
  area = 'Unknown Area',
  facilityName = 'Facility'
}) => {
  const breadcrumbItems = [
    {
      label: 'Finder',
      path: '/facility-finder-map',
      icon: 'Search'
    },
    {
      label: area,
      path: '/facility-finder-map',
      isArea: true
    },
    {
      label: facilityName,
      path: null,
      isCurrent: true
    }
  ];

  return (
    <nav className="flex items-center space-x-2 text-sm mb-6" aria-label="Breadcrumb">
      {breadcrumbItems?.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <Icon name="ChevronRight" size={14} className="text-muted-foreground" />
          )}
          
          {item?.path ? (
            <Link
              to={item?.path}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-micro"
            >
              {item?.icon && <Icon name={item?.icon} size={14} />}
              <span>{item?.label}</span>
            </Link>
          ) : (
            <span className="flex items-center space-x-1 text-foreground font-medium">
              {item?.icon && <Icon name={item?.icon} size={14} />}
              <span>{item?.label}</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;