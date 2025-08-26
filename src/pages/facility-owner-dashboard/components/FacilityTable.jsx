import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const FacilityTable = ({ facilities, onEdit, onViewPublic, onManagePhotos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const totalPages = Math.ceil(facilities?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFacilities = facilities?.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatStatus = (status) => {
    return status?.charAt(0)?.toUpperCase() + status?.slice(1);
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-card">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-semibold text-foreground">My Facilities</h3>
        <p className="text-sm text-muted-foreground mt-1">Manage your listed facilities</p>
      </div>
      {/* Desktop Table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="text-left py-3 px-6 text-sm font-medium text-foreground">Facility</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-foreground">Location</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-foreground">Rating</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-foreground">Status</th>
              <th className="text-left py-3 px-6 text-sm font-medium text-foreground">Views</th>
              <th className="text-right py-3 px-6 text-sm font-medium text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentFacilities?.map((facility) => (
              <tr key={facility?.id} className="border-b border-border hover:bg-muted/50 transition-micro">
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={facility?.image}
                        alt={facility?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{facility?.name}</p>
                      <p className="text-sm text-muted-foreground">{facility?.type}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <p className="text-sm text-foreground">{facility?.area}</p>
                  <p className="text-xs text-muted-foreground">{facility?.address}</p>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{facility?.rating}</span>
                    <span className="text-xs text-muted-foreground">({facility?.reviewCount})</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(facility?.status)}`}>
                    {formatStatus(facility?.status)}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span className="text-sm text-foreground">{facility?.views?.toLocaleString()}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onEdit(facility?.id)}
                      iconName="Edit"
                      iconSize={16}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onViewPublic(facility?.id)}
                      iconName="ExternalLink"
                      iconSize={16}
                    >
                      View
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onManagePhotos(facility?.id)}
                      iconName="Camera"
                      iconSize={16}
                    >
                      Photos
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile Cards */}
      <div className="lg:hidden p-4 space-y-4">
        {currentFacilities?.map((facility) => (
          <div key={facility?.id} className="border border-border rounded-lg p-4 bg-background">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={facility?.image}
                  alt={facility?.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-foreground truncate">{facility?.name}</h4>
                <p className="text-sm text-muted-foreground">{facility?.type}</p>
                <p className="text-xs text-muted-foreground mt-1">{facility?.area}</p>
              </div>
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(facility?.status)}`}>
                {formatStatus(facility?.status)}
              </span>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-foreground">{facility?.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Eye" size={14} className="text-muted-foreground" />
                  <span className="text-sm text-foreground">{facility?.views?.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEdit(facility?.id)}
                iconName="Edit"
                iconSize={14}
                className="flex-1"
              >
                Edit
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onViewPublic(facility?.id)}
                iconName="ExternalLink"
                iconSize={14}
                className="flex-1"
              >
                View
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => onManagePhotos(facility?.id)}
                iconName="Camera"
                iconSize={14}
                className="flex-1"
              >
                Photos
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between p-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, facilities?.length)} of {facilities?.length} facilities
          </p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              iconName="ChevronLeft"
              iconSize={16}
            >
              Previous
            </Button>
            <span className="text-sm text-foreground px-3 py-1">
              {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              iconName="ChevronRight"
              iconSize={16}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilityTable;