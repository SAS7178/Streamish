using Streamish.Models;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        void Add(UserProfile userProfile);
        void Delete(int id);
        UserProfile GetUserByIdWithVideos(int id);
        void Update(UserProfile userProfile);
    }
}