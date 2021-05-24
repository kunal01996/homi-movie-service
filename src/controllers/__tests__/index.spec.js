const { MovieController } = require("../index");
const { Movie } = require("../../models/movie.model");
const movies = require("../../__mocks__/data.mock");

const mockRequest = () => {
  return {
    body: {},
    params: {},
  };
};

const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("Test suite for movies", () => {
  beforeAll(() => {
    (Movie.find = jest.fn().mockResolvedValue(movies)),
      (Movie.create = jest.fn().mockResolvedValue({
        count: 1,
      })),
      (Movie.insertOne = jest.fn().mockResolvedValue({
        count: 1,
      })),
      (Movie.deleteOne = jest.fn().mockResolvedValue({
        delCount: 1,
      }));
  });
  const req = mockRequest();
  const res = mockResponse();

  it("Should insert movie", async () => {
    
    req.body = {
      name: "Yello Knife",
      description: "Fantastic movie",
      releaseDate: new Date().toDateString(),
      genre: ["Thriller", "Action"],
      duration: "155 mins",
      rating: "4.5",
    };
    await MovieController.create(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
  });

  it("Should fetch movie", async () => {
    req.params.name = null;
    await MovieController.get(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("Should fetch with parameter movie", async () => {
    await MovieController.get(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("Should delete movie", async () => {
    req.params.name = "age";
    await MovieController.deleteMovie(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  it("Should not delete movie", async () => {
    req.params = null;
    await MovieController.deleteMovie(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });
});
