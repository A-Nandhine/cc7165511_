// import React from 'react';
// import { User, Mail, Calendar, Award } from 'lucide-react';
// import { User as UserType, Event } from '../types';

// interface ProfileProps {
//   user: UserType;
//   events: Event[];
// }

// const Profile: React.FC<ProfileProps> = ({ user, events }) => {
//   const today = new Date().toISOString().split('T')[0];
  
//   const stats = {
//     totalEvents: events.length,
//     upcomingEvents: events.filter(e => e.date >= today).length,
//     pastEvents: events.filter(e => e.date < today).length,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">My Profile</h1>
//           <p className="text-gray-600 text-lg">Manage your account and view your event statistics</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Profile Card */}
//           <div className="lg:col-span-1">
//             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//               <div className="text-center">
//                 {/* Avatar */}
//                 <div className="relative inline-block mb-6">
//                   <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center">
//                     <User className="h-12 w-12 text-white" />
//                   </div>
//                   <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
//                     <div className="w-3 h-3 bg-white rounded-full"></div>
//                   </div>
//                 </div>

//                 {/* User Info */}
//                 <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>
                
//                 <div className="flex items-center justify-center text-gray-600 mb-6">
//                   <Mail className="h-4 w-4 mr-2" />
//                   <span className="text-sm">{user.email}</span>
//                 </div>

//                 {/* Member Since */}
//                 <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
//                   <div className="flex items-center justify-center text-orange-600">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     <span className="text-sm font-medium">Member since 2024</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Stats and Activities */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Stats Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Total Events</p>
//                     <p className="text-3xl font-bold text-gray-900">{stats.totalEvents}</p>
//                   </div>
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <Calendar className="h-6 w-6 text-blue-600" />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Upcoming</p>
//                     <p className="text-3xl font-bold text-green-600">{stats.upcomingEvents}</p>
//                   </div>
//                   <div className="bg-green-100 p-3 rounded-full">
//                     <Calendar className="h-6 w-6 text-green-600" />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <p className="text-sm font-medium text-gray-600">Completed</p>
//                     <p className="text-3xl font-bold text-orange-600">{stats.pastEvents}</p>
//                   </div>
//                   <div className="bg-orange-100 p-3 rounded-full">
//                     <Award className="h-6 w-6 text-orange-600" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Activity */}
//             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
              
//               {events.length === 0 ? (
//                 <div className="text-center py-8">
//                   <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />
//                   <p className="text-gray-500">No events created yet</p>
//                   <p className="text-sm text-gray-400 mt-2">Create your first event to see activity here</p>
//                 </div>
//               ) : (
//                 <div className="space-y-4">
//                   {events.slice(0, 5).map((event) => (
//                     <div key={event.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
//                       <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
//                       <div className="flex-1">
//                         <p className="font-medium text-gray-900">{event.title}</p>
//                         <p className="text-sm text-gray-600">
//                           {new Date(event.date).toLocaleDateString()} at {event.venue}
//                         </p>
//                       </div>
//                       <div className="text-xs text-gray-500">
//                         {event.date >= today ? 'Upcoming' : 'Past'}
//                       </div>
//                     </div>
//                   ))}
                  
//                   {events.length > 5 && (
//                     <div className="text-center pt-4">
//                       <p className="text-sm text-gray-500">
//                         And {events.length - 5} more events...
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>

//             {/* Account Settings */}
//             <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
//               <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>
              
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                   <div>
//                     <p className="font-medium text-gray-900">Email Notifications</p>
//                     <p className="text-sm text-gray-600">Receive notifications about your events</p>
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="checkbox"
//                       defaultChecked
//                       className="sr-only"
//                     />
//                     <div className="w-11 h-6 bg-orange-500 rounded-full shadow-inner cursor-pointer">
//                       <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5 transition-transform"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                   <div>
//                     <p className="font-medium text-gray-900">Event Reminders</p>
//                     <p className="text-sm text-gray-600">Get reminded about upcoming events</p>
//                   </div>
//                   <div className="relative">
//                     <input
//                       type="checkbox"
//                       defaultChecked
//                       className="sr-only"
//                     />
//                     <div className="w-11 h-6 bg-orange-500 rounded-full shadow-inner cursor-pointer">
//                       <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5 transition-transform"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import { User, Mail, Calendar, Award } from 'lucide-react';
import { User as UserType, Event } from '../types';

interface ProfileProps {
  user: UserType;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`);
        const data: Event[] = await res.json();
        const userEvents = data.filter(e => e.createdBy === user.name);
        setEvents(userEvents);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };

    fetchEvents();
  }, [user.name]);

  const stats = {
    totalEvents: events.length,
    upcomingEvents: events.filter(e => e.date >= today).length,
    pastEvents: events.filter(e => e.date < today).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Profile</h1>
          <p className="text-gray-600 text-lg">Manage your account and view your event statistics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-2">{user.name}</h2>

                <div className="flex items-center justify-center text-gray-600 mb-6">
                  <Mail className="h-4 w-4 mr-2" />
                  <span className="text-sm">{user.email}</span>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4">
                  <div className="flex items-center justify-center text-orange-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Member since 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Events</p>
                    <p className="text-3xl font-bold text-gray-900">{stats.totalEvents}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Upcoming</p>
                    <p className="text-3xl font-bold text-green-600">{stats.upcomingEvents}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-3xl font-bold text-orange-600">{stats.pastEvents}</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>

              {events.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-gray-300 mb-4" />
                  <p className="text-gray-500">No events created yet</p>
                  <p className="text-sm text-gray-400 mt-2">Create your first event to see activity here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {events.slice(0, 5).map((event) => (
                    <div key={event._id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{event.title}</p>
                        <p className="text-sm text-gray-600">
                          {new Date(event.date).toLocaleDateString()} at {event.venue}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500">
                        {event.date >= today ? 'Upcoming' : 'Past'}
                      </div>
                    </div>
                  ))}

                  {events.length > 5 && (
                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-500">
                        And {events.length - 5} more events...
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Email Notifications</p>
                    <p className="text-sm text-gray-600">Receive notifications about your events</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only" />
                    <div className="w-11 h-6 bg-orange-500 rounded-full shadow-inner cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5 transition-transform"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Event Reminders</p>
                    <p className="text-sm text-gray-600">Get reminded about upcoming events</p>
                  </div>
                  <div className="relative">
                    <input type="checkbox" defaultChecked className="sr-only" />
                    <div className="w-11 h-6 bg-orange-500 rounded-full shadow-inner cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full shadow transform translate-x-5 transition-transform"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
