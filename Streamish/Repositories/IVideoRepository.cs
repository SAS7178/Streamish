using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        Video GetVideoByIdWithComments(int id);
        List<Video> Search(string q, bool sortDesc);
        List<Video> GetAllWithComments();
        Video GetById(int id);
        void Update(Video video);
    }
}