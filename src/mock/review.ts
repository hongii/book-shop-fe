import { BookReviewItem } from "@/models/book.model";
import { HttpResponse, http } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

// faker api 사용
const mockReviewData: BookReviewItem[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  userName: `${faker.person.lastName()}${faker.person.firstName()}`,
  review: faker.lorem.paragraph(),
  createdAt: faker.date.past().toISOString(),
  score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
}));

// 핸들러 작성
export const reviewsById = http.get(`${process.env.REACT_APP_BASE_URL}/reviews/:bookId`, () => {
  return HttpResponse.json(mockReviewData, { status: 200 });
});